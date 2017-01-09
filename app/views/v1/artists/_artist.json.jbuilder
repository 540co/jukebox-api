json.id artist.id.to_s
json.href v1_artist_path(artist)
json.name artist.name
json.albums do
  json.href albums_v1_artist_path(artist)
  json.totalCount artist.albums.count
end
