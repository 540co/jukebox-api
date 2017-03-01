module V1
  module Eads
    extend ActiveSupport::Concern
    include Filterable
    include Limitable
    include Pageable
    include Sortable

    included do
    end

    def eads_list(relation)
      @responseType = relation.klass.name
      @responseFields = limit_fields
      relation = filter(relation)
      relation = sort(relation)
      # paginate MUST be called after filter
      relation = paginate(relation)
      relation
    end

    def eads_instance(instance)
      @responseType = instance.class.name
      @responseFields = limit_fields
      instance
    end

    def eads_meta
      meta = {
        response_time: "N/A",
      }
      meta[:response_type] = @responseType if @responseType
      meta[:user] = @current_user.id if @current_user
      meta[:pagination] = @pagination if @pagination
      meta
    end

    def eads_options
      options = {
        root: 'data',
        meta: eads_meta
      }
      options[:fields] = @responseFields if @responseFields
      options
    end
  end
end
