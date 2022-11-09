module Mutations
  class AddGirl < BaseMutation
    # TODO: define return fields
    field :girl, Types::GirlType, null: false

    # TODO: define arguments
    argument :name, String, required: true
    argument :age, Integer, required: true

    # TODO: define resolve method
    def resolve(params)
      girl = Girl.create!(name: params[:name], age: params[:age])
      {
        "girl": girl
      }
    end
  end
end
