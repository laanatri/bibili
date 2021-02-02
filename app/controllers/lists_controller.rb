class ListsController < ApplicationController
  def index
    @user = current_user
    @lists = List.where(user: @user)
  end

  def new
    @list = List.new
  end
  
  def create
    @list = List.new(list_params)
    if @list.save
      redirect_to lists_path
    else
      flash[:error] = "Something went wrong"
      render 'new'
    end
  end

  private

  def list_params
    params.require(:list).permit(:name).merge(user_id: current_user.id)
  end
end
