Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :users, only: [:index, :show] do
      resources :bios, except: [:index, :destroy]
      resources :posts
    end

    scope 'posts/:post_id', as: 'post' do
      resources :comments, only: [:index, :create]
    end
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
