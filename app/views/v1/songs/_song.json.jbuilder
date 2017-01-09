json.id song.id.to_s
json.href v1_song_path(song)
json.title song.title
json.duration song.duration
json.album do
  json.partial! 'v1/albums/album_summary', album: song.album
end
json.artist do
  json.partial! 'v1/artists/artist_summary', artist: song.album.artist
end
