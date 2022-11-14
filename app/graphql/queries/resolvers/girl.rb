module Queries
  module Resolvers
    class Girl < GraphQL::Schema::Resolver
      type Types::GirlType, null: false
      description "Girlの取得"

      argument :name, String, required: true, description: "Userのname"
 
      def resolve(params)
        ::Girl.find_by(name: params[:name])
      end
    end
  end
end