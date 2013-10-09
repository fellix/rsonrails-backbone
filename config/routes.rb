BackboneDemo::Application.routes.draw do
  root to: "home#show"

  resources :products, only: %w{index create show}
end
