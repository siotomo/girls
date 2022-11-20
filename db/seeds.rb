# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p 'seed start'

# scrapingするまでの間のテストデータ
test_date = Dir.glob(Rails.root.join('db/seeds/*.rb')).sort
test_date.each do |f|
  p f
  load(f)
end
