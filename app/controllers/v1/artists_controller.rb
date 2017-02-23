class V1::ArtistsController < V1::BaseController
  def index
    @artists = eads_list(Artist.all)
    render json: @artists, root: 'data', meta: @responseMeta, each_serializer: ArtistSerializer::Summary
  end

  def show
    @artist = eads_instance(Artist.find(params[:id]))
    render json: @artist, root: 'data', meta: @responseMeta
  end

  def albums
    artist = Artist.find(params[:id])
    @albums = eads_list(artist.albums)
    render json: @albums, root: 'data', meta: @responseMeta, each_serializer: AlbumSerializer::Summary
  end
end
