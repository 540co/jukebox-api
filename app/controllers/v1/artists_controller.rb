class V1::ArtistsController < V1::BaseController
  def index
    @artists = eads_list(Artist.all)
  end

  def show
    @artist = Artist.find(params[:id])
  end

  def albums
    artist = Artist.find(params[:id])
    @albums = eads_list(artist.albums)

    render 'v1/albums/index'
  end
end
