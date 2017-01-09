class V1::AlbumsController < V1::BaseController
  def index
    @albums = Album.all
  end

  def show
    @album = Album.find(params[:id])
  end

  def songs
    album = Album.find(params[:id])
    @songs = album.songs

    render 'v1/songs/index'
  end
end
