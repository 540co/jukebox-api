module V1
  module Eads
    extend ActiveSupport::Concern
    include Limitable
    include Sortable

    included do
    end

    def eads(relation)
      @responseType = relation.klass.name
      relation = sort(relation)
      # paginate MUST be called last
      relation = paginate(relation)
    end
  end
end
