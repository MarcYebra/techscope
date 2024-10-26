Rails.application.routes.draw do
  root "homepage#index"
  devise_for :users

  get "/blogs", to: "static_pages#index"



  namespace :api do
    namespace :v1 do
      resources :blogs, only: [ :index, :show ]
    end
  end
end
