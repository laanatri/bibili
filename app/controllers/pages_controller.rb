class PagesController < ApplicationController
  def home
  end

  def dashboard
  end

  def books
    @query = params[:query]
  end
end
