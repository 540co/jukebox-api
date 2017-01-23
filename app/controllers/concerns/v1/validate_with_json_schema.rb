module V1::ValidateWithJsonSchema
  extend ActiveSupport::Concern

  def validate_json_params
    JSON::Validator.validate!("schemas/#{controller_path}/#{action_name}.json", request.raw_post)
  end
end
