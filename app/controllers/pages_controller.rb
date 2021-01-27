class PagesController < ApplicationController
  def home
  end

  def dashboard
  end

  def books
    @query = params[:query]
  end

  def dashboard
    if user_signed_in?
      @user = current_user
      render 'pages/dashboard'
    else
      redirect_to root_path
    end
  end
end
