class V1::UsersController < V1::BaseController
  def index
    @users = eads_list(User.all)
  end

  def show
    @user = eads_instance(User.find(params[:id]))
  end

  def current
    @user = eads_instance(current_user)
    render :show
  end

  def playlists
    user = User.find(params[:id])
    @playlists = eads_list(user.playlists)
    render 'v1/playlists/index'
  end
end
