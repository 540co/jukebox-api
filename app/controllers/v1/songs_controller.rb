class V1::SongsController < V1::BaseController
  def index
    @songs = eads_list(Song.all)
    render json: @songs, each_serializer: SongSerializer::Summary, **eads_options
  end

  def show
    @song = eads_instance(Song.find(params[:id]))
    render json: @song, **eads_options
  end
end
