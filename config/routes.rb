# frozen_string_literal: true

Rails.application.routes.draw do
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql' if Rails.env.development?
  post '/graphql', to: 'graphql#execute'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'girls#index'
  namespace :api do
    resources :girls, only: %i[index show]
  end

  # For shiomi's test
  get 'ruka', to: 'ruka#index'
  get 'ruka/*path', to: 'ruka#index'
end
