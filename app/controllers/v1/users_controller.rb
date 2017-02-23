class V1::UsersController < V1::BaseController
  def index
    @users = eads_list(User.all)
    render json: @users, root: 'data', meta: @responseMeta, each_serializer: UserSerializer::Summary
  end

  def show
    @user = eads_instance(User.find(params[:id]))
    render json: @user, root: 'data', meta: @responseMeta
  end

  def current
    @user = eads_instance(current_user)
    render json: @user, root: 'data', meta: @responseMeta
  end

  def playlists
    user = User.find(params[:id])
    @playlists = eads_list(user.playlists)
    render json: @playlists, root: 'data', meta: @responseMeta, each_serializer: PlaylistSerializer::Summary
  end
end
