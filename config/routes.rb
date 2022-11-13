Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'top#index'

  get 'girls', to: 'girls#index'
  get 'girl/:id', to: 'girls#show'
  post 'girls', to: 'girls#add'
end
