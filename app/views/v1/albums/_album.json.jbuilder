json.id album.id.to_s
json.href v1_album_path(album)
json.title album.title
json.coverArt album.cover_art
json.releasedOn album.released_on
json.artist do
  json.partial! 'v1/artists/artist_summary', artist: album.artist
end
json.songs do
  json.href songs_v1_album_path(album)
  json.totalCount album.songs.count
end
