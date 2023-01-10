# frozen_string_literal: true

class Scraping::Shift
  DAY_OF_THE_WEEK_REGEXP = /\([月火水木金土日]\)/.freeze
  
  def initialize(city_heven_id, driver, girl_id)
    @girl_show_url = "https://www.cityheaven.net/tokyo/A1316/A131603/ultra-galaxy/A6ShopReservation/?girl_id=#{city_heven_id}"
    @driver = driver
    @city_heven_id = city_heven_id
    @girl_id = girl_id
  end

  def build_attributes
    p 'shift start'
    @driver.get @girl_show_url
    get_shift_page(@driver.find_element(:id, "pcreserveiframe").attribute("src"))
    shift_attributes = build_shift_attributes

    p 'shift_2 start'
    get_shift_page(@driver.find_elements(:class, "radius-box")[1].find_elements(tag_name: "a")[1].attribute("href"))
    shift_attributes_on_second_page = build_shift_attributes
    p 'shift finished'
    shift_attributes + shift_attributes_on_second_page
  end

  private

  def build_shift_attributes
    shift_data_json = @driver.execute_script("return get_result")
    parsed_shift_data = JSON.parse(shift_data_json)
    parsed_shift_data = parsed_shift_data["commu_acp_status"].map(&:values).flatten
    valid_shift_data = parsed_shift_data.filter do |data|
      ["TEL", "○", "×"].include?(data["acp_status_mark"])
    end

    valid_shift_data.map do |data|
      {
        girl_id: @girl_id,
        status: convert_status(data["acp_status_mark"]),
        start_time: Time.zone.parse("#{data["date"]} #{data["time"].insert(2, ":")}"),
        is_latest: true,
        created_at: Time.zone.now,
        updated_at: Time.zone.now
      }
    end
  end

  def get_shift_page(shift_url)
    @driver.get shift_url
  end

  def convert_status(status_mark)
    case status_mark
    when 'TEL'
      :tel
    when '○'
      :vacant
    when '×'
      :reserved
    end
  end
end
