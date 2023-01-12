# frozen_string_literal: true

namespace :scraping do
  desc 'Girlの情報をDBに保存します'
  task exec: :environment do
    scraper = Scraping::Scraper.new
    scraper.exec
  end
end