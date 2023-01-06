# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.5'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails', branch: 'main'
gem 'rails', '~> 6.1.5'

# Use mysql as the database for Active Record
gem 'mysql2', '>= 0.4.4'

# Use Puma as the app server
gem 'puma', '~> 5.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# GraphQL
gem 'graphiql-rails'
gem 'graphql'

# DB
gem 'ridgepole'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  gem 'listen', '~> 3.3'
  # debug
  gem 'debase'
  gem 'foreman'
  gem 'ruby-debug-ide'
  # rubocop
  gem 'code-scanning-rubocop', '~> 0.6.1'
  gem 'rubocop', '~> 1.22', require: false
  gem 'rubocop-rails', '~> 2.12', require: false
end

gem 'rmagick' # 画像加工(リサイズなど)gem 'simpacker'
