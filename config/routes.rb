Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :products, only: [:show, :index]
    resource :session, only: [:show, :create, :destroy]
    resources :carts, only: [:show, :create, :destroy]
    patch :update_count, controller: "carts"
    delete :clear_cart, controller: "carts"
  end
  
  get '*path', to: "static_pages#frontend_index"

end
