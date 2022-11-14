Rails.application.routes.draw do

  resources :recipefoods
  resources :recipes do
    resources :recipefoods
  end
  resources :pantryitems do
    resources :foods 
  end
  resources :foods do
    resources :pantryitems
  end
  resources :users
  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/me', to: "users#show"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
