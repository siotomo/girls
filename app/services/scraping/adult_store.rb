# frozen_string_literal: true
require 'benchmark'

class Scraping::AdultStore
  GIRL_LIST_PATH = 'girllist/'

  def initialize(url)
    @url = url
    options = Selenium::WebDriver::Chrome::Options.new
    options.add_argument('--user-agent=hogehoge')
    options.add_argument('--single-process')
    options.add_argument('--disable-application-cache')
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--start-maximized')
    @driver = Selenium::WebDriver.for :chrome, options: options
  end

  def scrape_girl_list
    @driver.get "#{@url}#{GIRL_LIST_PATH}"
    girl_ids = @driver.find_elements(:class, "girllistimg").map do |element|
      element.find_elements(:tag_name, "a")[1]
             .attribute("href").match(/girlid=(.*)/)[1]
    end

    girl_ids.each do |girl_id|
      result = Benchmark.realtime do
        girl = Scraping::Girl.new(girl_id, @driver)
        girl.scrape
      end
      puts "処理概要 #{result}s"
    end
  end
end



