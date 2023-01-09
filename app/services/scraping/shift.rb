# frozen_string_literal: true

class Scraping::Shift
  DAY_OF_THE_WEEK_REGEXP = /\([月火水木金土日]\)/.freeze
  
  def initialize(girl_id, driver)
    @girl_show_url = "https://www.cityheaven.net/tokyo/A1316/A131603/ultra-galaxy/A6ShopReservation/?girl_id=30734198"
    @driver = driver
    @girl_id = girl_id
    p "girl_id: #{@girl_id} start"
  end

  def exec
    get_shift_page
    # binding.pry

    # hash = {}
    # num_of_columns = get_time_table[0].text.split.size
    # num_of_columns.times do |num|
    #   date = (Time.zone.today + num.day).to_date.strftime('%m_%d')
    #   hash[date] = {}

    #   get_time_table.each do |time_table|
    #     time_table = time_table.text.split # time_table => ["09:00-", "‐", "‐", "‐", "‐", "‐", "‐", "‐"]
    #     time_slot = time_table[0].gsub("-", "")

    #     hash[date][time_slot] = time_table[num + 1]
    #   end
    # end

    # hash
    # binding.pry

    # 変数get_resultを取得
    shift_data = @driver.execute_script("return get_result")
    parsed_shift_data = JSON.parse(shift_data)
    p "girl_id: #{@girl_id} finished"
    # {"date"=>"2023-01-08", "girl_id"=>30734198, "time"=>"0900", "have_full"=>false, "acp_status_mark"=>"‐", "acp_status_flg"=>"NOTGIRL"}
    # girl - girl_description -> shift

    # Shift
    
  end

  # private

  # def get_time_table
  #   @driver.find_elements(tag_name: 'table')[1]
  #          .find_elements(tag_name: "tbody")[0]
  #          .find_elements(tag_name: "tr")
  # end

  # def remove_space(text)
  #   text.gsub(/\s/, '')
  # end

  def get_shift_page
    @driver.get @girl_show_url
    shift_url = @driver.find_element(:id, "pcreserveiframe").attribute("src")
    @driver.get shift_url
  end
end
