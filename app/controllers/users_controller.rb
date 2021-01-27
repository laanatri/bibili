class UsersController < ActionController::Base
  def update
    @user = User.find(params[:id])
    @user.update(username: params[:user]["username"])
  end
end
