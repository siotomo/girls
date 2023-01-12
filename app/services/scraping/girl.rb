# frozen_string_literal: true

module Scraping
  class Girl
    def initialize(city_heven_id, driver)
      @driver = driver
      @city_heven_id = city_heven_id
    end

    def scrape_and_save_data
      Rails.logger.debug "start_scraping: #{@city_heven_id}"
      girl_show_url = "#{Scraping::Scraper::CITY_HEAVEN_DOMAIN}tokyo/A1316/A131603/ultra-galaxy/girlid-#{@city_heven_id}/"
      @driver.get girl_show_url
      # girl = ::Girl.find_or_create_by({
      #                                 name: name,
      #                                 age: age,
      #                                 tall: tall,
      #                                 bust: bust,
      #                                 west: west,
      #                                 hip: hip,
      #                                 score: 20,
      #                                 store_id: 1,
      #                                 city_heven_id: @city_heven_id
      #                               })
      shift_attributes = Scraping::Shift.build_attributes(@city_heven_id, @driver, 1)
      binding.pry
      # ::Shift.insert_all(shift_attributes) if shift_attributes.present?
      Rails.logger.debug "finished_scraping: #{@city_heven_id}"
    end

    private

    def name
      @driver.find_element(:id, 'p_data').find_elements(tag_name: 'td')[0].text
    end

    def age
      @driver.find_element(:id, 'p_data').find_elements(tag_name: 'td')[1].text.gsub('歳', '')
    end

    def tall
      girls_proportion.match(/T(\d{3})/)[1]
    end

    def bust
      girls_proportion.match(/\([A-Z]\)/)[0].gsub('(', '').gsub(')', '')
    end

    def west
      girls_proportion.split('・')[2]
    end

    def hip
      girls_proportion.split('・')[3]
    end

    def remove_space(text)
      text.gsub(/\s/, '')
    end

    def girls_proportion
      remove_space(@driver.find_element(:id, 'p_data').find_elements(tag_name: 'td')[2].text)
    end
  end
end