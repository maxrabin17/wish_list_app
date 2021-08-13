Rails.application.routes.draw do
  resources :comments
  resources :groups
  resources :wishes
  resources :users

  get '/me', to: 'users#show'
  delete '/logout', to: ''
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
