class V1::PlaylistsController < V1::BaseController
  def index
    @playlists = Playlist.all
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def songs
    playlist = Playlist.find(params[:id])
    @songs = playlist.songs
    render 'v1/songs/index'
  end
end
