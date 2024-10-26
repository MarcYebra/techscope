Rails.application.routes.draw do
  get "react/index"
  root "react#index"
  devise_for :users

  get "/*path", to: 'react#index'



  namespace :api do
    namespace :v1 do
      resources :blogs, only: [ :index, :show ]
    end
  end
end
