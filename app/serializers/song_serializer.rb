class SongSerializer < ActiveModel::Serializer

  class Summary < SongSerializer
    attributes :id, :href, :title, :duration
  end

  attributes :id, :href, :title, :duration, :artist, :created_at, :updated_at
  has_one :album, serializer: AlbumSerializer::Summary

  def href
    Rails.application.routes.url_helpers.v1_song_path(object)
  end

  def artist
    ArtistSerializer::Summary.new(object.album.artist)
  end
end
