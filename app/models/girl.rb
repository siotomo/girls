# frozen_string_literal: true

class Girl < ApplicationRecord
  extend Enumerize

  belongs_to :store
  has_many :shifts, dependent: :destroy

  enumerize :bust, in: {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11
  }, scope: true, default: :A
end
