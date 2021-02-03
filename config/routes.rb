Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users, controllers: { registrations: 'users/registrations' }
  root to: 'pages#home'
  get "books/search/:query", to: 'pages#books'
  get "lists", to: "lists#index"
  get "lists/new", to: "lists#new", as: "new_list"
  post "lists", to: "lists#create"
  get "dashboard", to: "pages#dashboard"
  patch "user/:id", to: "users#update", as: 'username_edit'
end
