# frozen_string_literal: true
require 'open-uri'
require 'json'

namespace :scraping do
  desc 'kintoneアプリに関連する情報を取得しDBに保存します。 引数：[kintone_account_id,app_id1,app_id2...]'
  task exec: :environment do
    scraper = Scraping::Scraper.new
    scraper.exec
  end
end
