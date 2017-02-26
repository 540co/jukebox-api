require 'digest'

class V1::BaseController < ApplicationController
  include V1::ValidateWithJsonSchema
  include V1::Eads
  before_action :validate_token
  rescue_from V1::Exceptions::UnauthorizedError, with: :unauthorized
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :bad_request
  rescue_from JSON::Schema::ValidationError, with: :bad_request

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
    @error = V1::Exceptions::Error.new(developer_message: 'Unauthorized', error_code: '401')
    render json: @error, root: 'error', serializer: ErrorSerializer, status: 401
  end

  def forbidden
    @error = V1::Exceptions::Error.new(developer_message: 'Forbidden', error_code: '403')
    render json: @error, root: 'error', serializer: ErrorSerializer, status: 403
  end

  def record_not_found
    @error = V1::Exceptions::Error.new(developer_message: 'Record Not Found', error_code: '404')
    render json: @error, root: 'error', serializer: ErrorSerializer, status: 404
  end

  def bad_request
    @error = V1::Exceptions::Error.new(developer_message: 'Bad Request', error_code: '400')
    render json: @error, root: 'error', serializer: ErrorSerializer, status: 400
  end
end
