class V1::SongsController < V1::BaseController
  def index
    @songs = eads_list(Song.all)
  end

  def show
    @song = eads_instance(Song.find(params[:id]))
  end
end
