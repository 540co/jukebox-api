class V1::UsersController < V1::BaseController
  def index
    @users = eads_list(User.all)
    render json: @users, each_serializer: UserSerializer::Summary, **eads_options
  end

  def show
    @user = eads_instance(User.find(params[:id]))
    render json: @user, **eads_options
  end

  def current
    @user = eads_instance(current_user)
    render json: @user, **eads_options
  end

  def playlists
    user = User.find(params[:id])
    @playlists = eads_list(user.playlists)
    render json: @playlists, each_serializer: PlaylistSerializer::Summary, **eads_options
  end
end
