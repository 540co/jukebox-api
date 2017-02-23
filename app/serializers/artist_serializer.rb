class ArtistSerializer < ActiveModel::Serializer

  class Summary < ArtistSerializer
    attributes :id, :href, :name
  end

  attributes :id, :href, :name, :albums, :created_at, :updated_at

  def href
    Rails.application.routes.url_helpers.v1_artist_path(object)
  end

  def albums_href
    Rails.application.routes.url_helpers.albums_v1_artist_path(object)
  end

  def albums
    {
      href: albums_href,
      total_count: object.albums.count
    }
  end
end
