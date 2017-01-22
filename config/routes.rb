Rails.application.routes.draw do
  namespace :v1 do
    scope defaults: { format: 'json' } do
      resources :albums, only: [:index, :show] do
        get :songs, on: :member
      end
      resources :artists, only: [:index, :show] do
        get :albums, on: :member
      end
      resources :playlists, only: [:index, :show] do
        get :songs, on: :member
      end
      resources :songs, only: [:index, :show]
      resources :users, only: [:index, :show] do
        get 'current', on: :collection
        get :playlists, on: :member
      end
    end
  end
end
