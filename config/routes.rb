Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'login', to: 'authentication#login'
      resources :admin_groups
      resources :users
    end
  end
end
