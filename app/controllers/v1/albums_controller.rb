class V1::AlbumsController < V1::BaseController

  def index
    @albums = eads(Album.all.includes(:artist))
  end

  def show
    @album = Album.includes(:artist).find(params[:id])
  end

  def songs
    album = Album.find(params[:id])
    @songs = eads(album.songs)

    render 'v1/songs/index'
  end
end
