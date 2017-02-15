module V1
  module Eads
    extend ActiveSupport::Concern
    include Pageable
    include Sortable

    included do
    end

    def eads_list(relation)
      @responseType = relation.klass.name
      relation = sort(relation)
      # paginate MUST be called last
      relation = paginate(relation)
    end
  end
end
