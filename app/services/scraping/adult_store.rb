# frozen_string_literal: true

class Scraping::AdultStore
  GIRL_LIST_PATH = 'girllist/'

  def initialize(url)
    @girl_list_html = Nokogiri::HTML.parse(URI.parse("#{url}#{GIRL_LIST_PATH}").read)
  end

  def scrape_girl_list
    @girl_list_html.css('#s2 > ul > li .girllistimg').map do |dom|
      girl_show_url = dom.children[1].attributes["href"].value
      girl = Scraping::Girl.new(girl_show_url)
      girl.scrape
    end
  end
end
