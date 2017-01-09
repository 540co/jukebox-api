class V1::ArtistsController < V1::BaseController
  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find(params[:id])
  end

  def albums
    artist = Artist.find(params[:id])
    @albums = artist.albums

    render 'v1/albums/index'
  end
end
