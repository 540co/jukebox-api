module V1::Eads
  module Limitable

    DEFAULT_LIMIT = 10.freeze
    MAX_LIMIT = 50.freeze

    def limit_fields
      limit = DEFAULT_LIMIT
      offset = 0

      if params[:limit]
        limit = params[:limit].to_i <= MAX_LIMIT ? params[:limit].to_i : MAX_LIMIT
      end

      offset = params[:offset].to_i if params[:offset]
      [limit, offset]
    end

    def paginate(relation)
      total_count = relation.count
      limit, offset = limit_fields
      relation = relation.limit(limit).offset(offset)
      count = relation.count
      @pagination = {
        limit: limit,
        offset: offset,
        count: count,
        totalCount: total_count
      }
      set_link_header
      relation
    end

    def set_link_header
      links = []
      build_links.each do |name, url|
        links << "<#{url}>; rel=\"#{name.to_s}\""
      end
      response.headers['Link'] = links.join(",")
    end

    def build_links
      links = {}
      url = request.original_url
      uri = URI.parse(url)
      query = Rack::Utils.parse_query(uri.query)
      query["limit"] = @pagination[:limit]

      # FIRST
      query["offset"] = 0
      links[:first] = build_link(uri, query)

      # LAST
      query["offset"] = (@pagination[:totalCount] / @pagination[:limit]) * @pagination[:limit]
      uri.query = Rack::Utils.build_query(query)
      links[:last] = build_link(uri, query)

      # PREV
      if @pagination[:offset] > 0
        offset = @pagination[:offset] - @pagination[:limit]
        query["offset"] = offset.negative? ? 0 : offset
        uri.query = Rack::Utils.build_query(query)
        links[:prev] = build_link(uri, query)
      end

      # NEXT
      if (@pagination[:offset] + @pagination[:limit]) < @pagination[:totalCount]
        query["offset"] = @pagination[:offset] + @pagination[:limit]
        uri.query = Rack::Utils.build_query(query)
        links[:next] = build_link(uri, query)
      end

      links
    end

    def build_link(uri, query)
      uri.query = Rack::Utils.build_query(query)
      uri.to_s
    end
  end
end
