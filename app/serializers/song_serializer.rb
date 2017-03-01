class SongSerializer < ActiveModel::Serializer

  class Summary < SongSerializer
    attributes :id, :href, :title, :duration
  end

  attributes :id, :href, :title, :duration, :album, :artist, :created_at, :updated_at

  def href
    Rails.application.routes.url_helpers.v1_song_path(object)
  end

  def album
    AlbumSerializer::Summary.new(object.album)
  end

  def artist
    ArtistSerializer::Summary.new(object.album.artist)
  end
end
