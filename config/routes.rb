Rails.application.routes.draw do
  # namespace :api do
    resources :groups
    resources :wishes
    resources :users
  
    get '/me', to: 'users#show'
  
    post '/login', to: 'sessions#create'
    delete 'logout', to: 'sessions#destroy'
  # end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # resources :comments
end
