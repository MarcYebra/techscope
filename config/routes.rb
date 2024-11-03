Rails.application.routes.draw do
  root "react#index"

  devise_for :users, controller: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  namespace :api do
    namespace :v1 do 
      resources :blogs, only: [:index, :show]
    end
  end

  get "/*path", to: 'react#index'
end
