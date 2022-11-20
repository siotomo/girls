# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.5'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails', branch: 'main'
gem 'rails', '~> 6.1.5'
# Use sqlite3 as the database for Active Record
gem 'sqlite3', '~> 1.4'
# Use Puma as the app server
gem 'puma', '~> 5.0'
# Use SCSS for stylesheets
gem 'sass-rails', '>= 6'
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
  # test
  gem 'debase'
  gem 'ruby-debug-ide'

  # rubocop
  gem 'rubocop', '~> 1.22', require: false
  gem 'rubocop-rails', '~> 2.12', require: false
  gem 'code-scanning-rubocop', '~> 0.6.1' # for GitHub Actions
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'simpacker'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
