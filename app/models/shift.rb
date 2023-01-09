# frozen_string_literal: true

class Shift < ApplicationRecord
  extend Enumerize

  belongs_to :girl

  enumerize :status, in: {
    vacant: 1,   # 予約可能
    reserved: 2, # 予約済み
    tel: 3       # TEL
  }, scope: true, default: :vacant
end
