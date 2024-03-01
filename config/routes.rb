Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'reset-password', to: 'password_resets#reset_password'
      post 'login', to: 'authentication#login'
      post 'signup', to: 'authentication#register'
      post 'password/forgot', to: 'password_resets#forgot_password'
      post 'password/reset', to: 'password_resets#reset_password'
      resources :admin_groups
      resources :users
    end
  end
end
