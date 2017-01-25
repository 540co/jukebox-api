json.id album.id.to_s
json.href v1_album_path(album)
json.title album.title
json.coverArt album.cover_art
json.artist do
  json.id album.artist.id.to_s
  json.href v1_artist_path(album.artist)
  json.name album.artist.name
end
