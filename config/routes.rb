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

  get "api/records/index"
  get "api/records/:id", to: "api/records#show"
  post "api/records", to: "api/records#create"
  put "api/records/:id", to: "api/records#update"
  delete "api/records/:id", to: "api/records#destroy"
end
