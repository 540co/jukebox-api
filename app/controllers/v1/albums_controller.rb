class V1::AlbumsController < V1::BaseController

  def index
    @albums = eads_list(Album.all.includes(:artist))
    render json: @albums, root: 'data', meta: @responseMeta, each_serializer: AlbumSerializer::Summary
  end

  def show
    @album = eads_instance(Album.includes(:artist).find(params[:id]))
    render json: @album, root: 'data', meta: @responseMeta
  end

  def songs
    album = Album.find(params[:id])
    @songs = eads_list(album.songs)
    render json: @songs, root: 'data', meta: @responseMeta, each_serializer: SongSerializer::Summary
  end
end
