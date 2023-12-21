class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:app]
  protect_from_forgery prepend: true

  def home_page
    if user_signed_in?
      redirect_to home_app_path
    end
  end

  def app
  end
end
