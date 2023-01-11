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
      girl = Girl.find_or_create_by({
                                      name: name,
                                      age: age,
                                      tall: tall,
                                      bust: bust,
                                      west: west,
                                      hip: hip,
                                      score: 20,
                                      store_id: 1,
                                      city_heven_id: @city_heven_id
                                    })

      shift = Scraping::Shift.new(@city_heven_id, @driver, girl.id)
      shift_attributes = shift.build_attributes
      Shift.insert_all(shift_attributes) if shift_attributes.present?
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

# # 出勤日
# dls = prefecture_index_html.css('#girlprofile_right ul#girl_sukkin > li > dl')
# shukkinbi = dls.map { |dl| dl.children[1].text.gsub(/\s/, '') }
# shukkinjikan = dls.map { |dl| dl.children[3].text.gsub(/\s/, '') }

# # 名前、年齢、3サイズd
# prefecture_index_html.css('#profiles > table > tr').map do |tr|
#   tr.children[3].text.gsub(/\s/, '')
#   binding.pry
# end

# 性格、個性
# seikaku, kosei = prefecture_index_html.css('#profile_salespoint > table > tr').map do |dom|
#   dom.css('ul > a').map { |t| t.text }
# end

# 店長からのコメント
# comments = prefecture_index_html.css('#profile_manager p.commentmanager')[0].children.map do |text_dom|
#   next if text_dom.text.blank?

#   text_dom.text.gsub(/\s/, '')
# end.compact

# binding.pry
# 画像取得コード
# gazo_urls = prefecture_index_html.css('#girlprofile_left .profile_image > ul > li').map do |dom|
#   next if dom.attributes["data-thumb"].blank?
#   "https:#{dom.attributes["data-thumb"].value}"
# end.compact
# gazo_urls.each do |gazo_url|
#   open gazo_url do |image|
#     File.open("public/image/#{SecureRandom.base64(10)}","w") do |file|
#       file.puts image.read
#     end
#   end
# end
# 画像取得コード
