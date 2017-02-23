module V1::Eads
  module Limitable

    def limit_fields
      return nil unless params[:fields]
      fields = [:id, :href, :total_count]
      fields += params[:fields].split(',').map {|f| f.underscore.to_sym} if params[:fields]
      fields.uniq
    end

  end
end
