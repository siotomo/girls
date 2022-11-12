class Store < ApplicationRecord
  has_many :girls, dependent: :destroy
end
