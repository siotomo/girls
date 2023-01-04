# frozen_string_literal: true

class Scraping::Scraper
  CITY_HEAVEN_DOMAIN = 'https://www.cityheaven.net/'
  ADULT_STORE_PATH = %w(
    tokyo/A1316/A131603/ultra-galaxy/
  )

  def initialize; end

  def exec
    ADULT_STORE_PATH.each do |store_path|
      store_url = "#{CITY_HEAVEN_DOMAIN}#{store_path}"

      store = Scraping::AdultStore.new(store_url)
      store.scrape_girl_list
    end
  end
end