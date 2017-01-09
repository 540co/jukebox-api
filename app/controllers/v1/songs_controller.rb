class V1::SongsController < V1::BaseController
  def index
    @songs = Song.all
  end

  def show
    @song = Song.find(params[:id])
  end
end
