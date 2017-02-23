class V1::ArtistsController < V1::BaseController
  def index
    @artists = eads_list(Artist.all)
    render json: @artists, each_serializer: ArtistSerializer::Summary, **eads_options
  end

  def show
    @artist = eads_instance(Artist.find(params[:id]))
    render json: @artist, **eads_options
  end

  def albums
    artist = Artist.find(params[:id])
    @albums = eads_list(artist.albums)
    render json: @albums, each_serializer: AlbumSerializer::Summary, **eads_options
  end
end
