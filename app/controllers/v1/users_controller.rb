class V1::UsersController < V1::BaseController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def current
    @user = current_user
    render :show
  end
end
