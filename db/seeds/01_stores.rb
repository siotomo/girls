# frozen_string_literal: true

stores = [
  {
    id: 1,
    name: 'ギャラクシー'
  }
]
Store.delete_all
Store.create!(stores)
