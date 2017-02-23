module V1
  module Eads
    extend ActiveSupport::Concern
    include Filterable
    include Pageable
    include Sortable

    included do
    end

    def eads_list(relation)
      @responseType = relation.klass.name
      relation = filter(relation)
      relation = sort(relation)
      # paginate MUST be called after filter
      relation = paginate(relation)
      # eads_meta MUST be called after paginate
      @responseMeta = eads_meta
      relation
    end

    def eads_instance(instance)
      @responseType = instance.class.name
      @responseMeta = eads_meta
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
  end
end
