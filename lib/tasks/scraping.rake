# frozen_string_literal: true

namespace :scraping do
  desc 'kintoneアプリに関連する情報を取得しDBに保存します。 引数：[kintone_account_id,app_id1,app_id2...]'
  task exec: :environment do
    p "hoge"
    prefecture_index_html = URI.parse('https://www.cityheaven.net/tokyo/A1316/A131603/ultra-galaxy/girlid-30734198').read
    prefecture_index_html = Nokogiri::HTML.parse(prefecture_index_html)
    # 出勤日
    dls = prefecture_index_html.css('#girlprofile_right ul#girl_sukkin > li > dl')
    shukkinbi = dls.map { |dl| dl.children[1].text.gsub(/\s/, '') }
    shukkinjikan = dls.map { |dl| dl.children[3].text.gsub(/\s/, '') }
    
    hoge = prefecture_index_html.css('#profile_salespoint > table').children.map do |dom|
      next if dom.blank?
      binding.pry
    end
    binding.pry
    hoge.map do |fuga|
      binding.pry
    end
    binding.pry
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
  end
end
