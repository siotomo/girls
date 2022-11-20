# frozen_string_literal: true

class Store < ApplicationRecord
  has_many :girls, dependent: :destroy
end
