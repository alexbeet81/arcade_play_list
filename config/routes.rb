Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#home'
  
  get "/games", to: "pages#games"
  get "/game", to: "pages#game"
end
