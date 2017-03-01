class UserSerializer < ActiveModel::Serializer

  class Summary < UserSerializer
    attributes :id, :href, :username
  end

  attributes :id, :href, :username, :first_name, :last_name, :created_at, :updated_at

  def href
    Rails.application.routes.url_helpers.v1_user_path(object)
  end

end
