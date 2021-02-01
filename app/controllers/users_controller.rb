class UsersController < ActionController::Base

  def update
    @user = User.find(params[:id])
    last_updated = @user.updated_at.to_date
    today = Date.today
    if (today - last_updated).to_i > 29
      @user.update(username: params[:user]["username"])
    else
      redirect_to dashboard_path
      flash.alert = 'Dernière mise à jour il y a moins de 30 jours'
    end
  end
end
