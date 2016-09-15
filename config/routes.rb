Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :film_locations, only: [:index]
    resources :search_suggestions, only: [:index]
  end
end
