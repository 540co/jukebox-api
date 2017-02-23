class V1::AlbumsController < V1::BaseController

  def index
    @albums = eads_list(Album.all.includes(:artist))
    render json: @albums, each_serializer: AlbumSerializer::Summary, **eads_options
  end

  def show
    @album = eads_instance(Album.includes(:artist).find(params[:id]))
    render json: @album, **eads_options
  end

  def songs
    album = Album.find(params[:id])
    @songs = eads_list(album.songs)
    render json: @songs, each_serializer: SongSerializer::Summary, **eads_options
  end
end
