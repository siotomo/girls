# frozen_string_literal: true

class Scraping::Girl
  def initialize(url)
    girl_id = "30734198"
    @shift = Scraping::Shift.new(girl_id)
  end

  def scrape
    {
      # name: name,
      # age: age,
      # height: height,
      # bra_size: bra_size,
      # waist_size: waist_size,
      # description: description,
      # # 個性
      # personalities: personalities,
      # # 性格
      # character: character,
      shifts: @shift.exec,
      # images: images
    }
  end

  def name
    @girl_show_html.css('#profiles > table > tr')[0].children[3].text
  end

  def age
    @girl_show_html.css('#profiles > table > tr')[1].children[3].text
  end

  def height
    girls_proportion.match(/T(\d{3})/).match(/T(\d{3})/)[1]
  end

  private

  def remove_space(text)
    text.gsub(/\s/, '')
  end

  def girls_proportion
    remove_space(@girl_show_html.css('#profiles > table > tr')[2].children[3].text)
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