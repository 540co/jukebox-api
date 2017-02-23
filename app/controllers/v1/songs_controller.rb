class V1::SongsController < V1::BaseController
  def index
    @songs = eads_list(Song.all)
    render json: @songs, root: 'data', meta: @responseMeta, each_serializer: SongSerializer::Summary
  end

  def show
    @song = eads_instance(Song.find(params[:id]))
    render json: @song, root: 'data', meta: @responseMeta
  end
end
