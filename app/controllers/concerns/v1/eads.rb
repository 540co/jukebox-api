module V1
  module Eads
    extend ActiveSupport::Concern
    include Sortable

    included do
    end

    def eads(relation)
      eads_sort(relation)
    end
  end
end
