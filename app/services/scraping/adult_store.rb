# frozen_string_literal: true

class Scraping::AdultStore
  GIRL_LIST_PATH = 'girllist/'
  PAGE_NO = 3

  def initialize(url)
    @url = url
    options = Selenium::WebDriver::Chrome::Options.new
    options.add_argument('--user-agent=test')
    options.add_argument('--single-process')
    options.add_argument('--disable-application-cache')
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--start-maximized')
    client = Selenium::WebDriver::Remote::Http::Default.new
    client.read_timeout = 1000000
    @driver = Selenium::WebDriver.for :chrome, options: options, http_client: client
  end

  def scrape_girl_list
    2.upto(PAGE_NO) do |current_page|
      @driver.get "#{@url}#{GIRL_LIST_PATH}#{current_page}"
      city_heven_ids = @driver.find_elements(:class, "girllistimg").map do |element|
        element.find_elements(:tag_name, "a")[1]
              .attribute("href").match(/girlid=(.*)/)[1]
      end

      city_heven_ids.each do |city_heven_id|
        girl = Scraping::Girl.new(city_heven_id, @driver)
        girl.scrape_and_save_data
      end
    end
  end
end



