class AlbumSerializer < ActiveModel::Serializer

  class Summary < AlbumSerializer
    attributes :id, :href, :title, :cover_art
    has_one :artist, serializer: ArtistSerializer::Summary
  end

  attributes :id, :href, :title, :cover_art, :released_on, :songs, :created_at, :updated_at
  has_one :artist, serializer: ArtistSerializer::Summary

  def href
    Rails.application.routes.url_helpers.v1_album_path(object)
  end

  def songs_href
    Rails.application.routes.url_helpers.songs_v1_album_path(object)
  end

  def songs
    {
      href: songs_href,
      total_count: object.songs.count
    }
  end
end
