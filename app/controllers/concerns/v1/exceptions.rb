module V1
  module Exceptions
    class AuthenticationError < StandardError; end
    class AuthorizationError < StandardError; end
    class UnauthorizedError < AuthenticationError; end
    class ForbiddenError < AuthorizationError; end
    class BadRequestError < StandardError; end

    class Error
      include ActiveModel::Model
      include ActiveModel::Serialization
      attr_accessor :developer_message, :user_message, :error_code, :more_info
    end
  end
end
