class V1::AlbumsController < V1::BaseController

  def index
    @albums = eads_list(Album.all.includes(:artist))
  end

  def show
    @album = eads_instance(Album.includes(:artist).find(params[:id]))
  end

  def songs
    album = Album.find(params[:id])
    @songs = eads_list(album.songs)

    render 'v1/songs/index'
  end
end
