Rails.application.routes.draw do
  # TODO: Do we need all these routes??
  devise_for :users
  # get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # Public
  root "home#home_page"

  # Private
  get "home/app"
end
