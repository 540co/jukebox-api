module V1::Eads
  module Sortable
    extend ActiveSupport::Concern

    included do
    end

    def sort_fields
      fields = []
      if params[:sort]
        params[:sort].split(',').each do |field|
          next if field.include?('.')
          if field.starts_with?('-')
            fields << "#{field[1..-1].underscore} DESC"
          else
            fields << "#{field.underscore} ASC"
          end
        end
      end
      fields.join(',')
    end

    def eads_sort(relation)
      relation = relation.order(sort_fields)
    end
  end
end
