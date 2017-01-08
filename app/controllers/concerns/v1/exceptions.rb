module V1
  module Exceptions
    class AuthenticationError < StandardError; end
    class AuthorizationError < StandardError; end
    class UnauthorizedError < AuthenticationError; end
    class ForbiddenError < AuthorizationError; end
  end
end
