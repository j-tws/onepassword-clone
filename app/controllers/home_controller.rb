class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:app]
  protect_from_forgery prepend: true

  def home_page
  end

  def app
  end
end
