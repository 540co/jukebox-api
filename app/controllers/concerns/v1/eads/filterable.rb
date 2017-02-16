module V1::Eads
  module Filterable

    def filter_fields
      fields = []
      if params[:filters]
        params[:filters].split(',').each do |param|
          next if param.include?('.')
          field, operator, value = param.scan(/([a-zA-Z]+)([^a-zA-Z]+)(.+)/)[0]
          fields << [field, operator, value]
        end
      end
      fields
    end

    def filter(relation)
      filter_fields.each do |param|
        field, operator, value = param
        if '==' == operator
          relation = relation.where(field => value)
        end
      end
      relation
    end
  end
end
