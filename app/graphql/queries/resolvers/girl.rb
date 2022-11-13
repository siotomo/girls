module Queries
  module Resolvers
    class Girl < GraphQL::Schema::Resolver
      type Types::GirlType, null: false
      description "Girlの取得"

      argument :id, String, required: true, description: "Userのid"
 
      def resolve(params)
        ::Girl.find(params[:id])
      end
    end
  end
end