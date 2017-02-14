require 'digest'

class V1::BaseController < ApplicationController
  include ActionView::Layouts
  include V1::ValidateWithJsonSchema
  include V1::Eads
  before_action :validate_token
  rescue_from V1::Exceptions::UnauthorizedError, with: :unauthorized
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :bad_request
  rescue_from JSON::Schema::ValidationError, with: :bad_request
  layout 'v1/layouts/default'

  private

  def validate_token
    header = request.env['HTTP_AUTHORIZATION']
    token = header.split(' ').last unless header.nil?

  end

  def validate_token
    raise V1::Exceptions::UnauthorizedError if current_token.nil? || current_user.nil?
  end

  def current_token
    return @current_token unless @current_token.nil?
    header = request.env['HTTP_AUTHORIZATION']
    @current_token = header.split(' ').last unless header.nil?
  end

  def current_user
    return @current_user unless @current_user.nil?
    @current_user = User.where(token: Digest::MD5.hexdigest(current_token)).first unless current_token.nil?
  end

  def unauthorized
    render json: {error: 'Unauthorized'}.to_json, status: 401
  end

  def forbidden
    render json: {error: 'Forbidden'}.to_json, status: 403
  end

  def record_not_found
    render json: {error: 'Record Not Found'}.to_json, status: 404
  end

  def bad_request
    render json: {error: 'Bad Request'}.to_json, status: 400
  end
end
