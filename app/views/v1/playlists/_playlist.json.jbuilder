json.id playlist.id.to_s
json.href v1_playlist_path(playlist)
json.name playlist.name
json.user do
  json.partial! 'v1/users/user_summary', user: playlist.user
end
json.songs do
  json.href songs_v1_playlist_path(playlist)
  json.totalCount playlist.songs.count
end
