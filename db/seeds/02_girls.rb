# frozen_string_literal: true

girls = [
  {
    store_id: 1,
    name: '桃乃木みく',
    city_heven_id: 35_975_863
  },
  {
    store_id: 1,
    name: '桜井ハイネ',
    city_heven_id: 43_715_926
  },
  {
    store_id: 1,
    name: 'ゆづき',
    city_heven_id: 38_778_822
  },
  {
    store_id: 1,
    name: '佐藤りんか',
    city_heven_id: 38_550_414
  }
]
Girl.delete_all
Girl.create!(girls)
