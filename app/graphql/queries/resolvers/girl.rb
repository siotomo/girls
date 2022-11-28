# frozen_string_literal: true

module Queries
  module Resolvers
    class Girl < GraphQL::Schema::Resolver
      type Types::GirlType, null: false
      description 'Girlの取得'

      # argument :id, Integer, required: true, description: "Userのname"

      def resolve
        ::Girl.find(2)
      end
    end
  end
end
