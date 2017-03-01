class PlaylistSerializer < ActiveModel::Serializer

  class Summary < PlaylistSerializer
    attributes :id, :href, :name
  end

  attributes :id, :href, :name, :user, :songs, :created_at, :updated_at

  def href
    Rails.application.routes.url_helpers.v1_playlist_path(object)
  end

  def user
    UserSerializer::Summary.new(object.user)
  end

  def songs_href
    Rails.application.routes.url_helpers.songs_v1_playlist_path(object)
  end

  def songs
    {
      href: songs_href,
      total_count: object.songs.count
    }
  end
end
