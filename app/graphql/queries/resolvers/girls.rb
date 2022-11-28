# frozen_string_literal: true

module Queries
  module Resolvers
    class Girls < GraphQL::Schema::Resolver
      type [Types::GirlType], null: false
      description 'Girlの一覧取得'

      def resolve
        ::Girl.all
      end
    end
  end
end
