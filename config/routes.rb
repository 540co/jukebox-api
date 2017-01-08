Rails.application.routes.draw do
  namespace :v1 do
    scope defaults: { format: 'json' } do
      resources :users, only: [:index, :show] do
        get 'current', on: :collection
      end
    end
  end
end
