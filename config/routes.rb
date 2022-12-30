# frozen_string_literal: true

Rails.application.routes.draw do
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql' if Rails.env.development?
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    post '/graphql', to: 'graphql#execute'
    resources :girls, only: %i[index show]
  end

  get 'girls', to: 'girls#index'
  get 'girls/*path', to: 'girls#index'
end
