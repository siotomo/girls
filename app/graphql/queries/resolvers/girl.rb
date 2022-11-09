module Queries
  module Resolvers
    class Girl < GraphQL::Schema::Resolver
      type Types::GirlType, null: false
      description "Girlの取得"

      argument :name, String, required: true, description: "Userのid"
 
      def resolve
        p 'resolver'
        ::Girl.first
        # ::Girl.find(params[:id])
      end
    end
  end
end