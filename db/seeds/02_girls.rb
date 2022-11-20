# frozen_string_literal: true

girls = [
  {
    store_id: 1,
    name: 'しずく',
    age: 22
  },
  {
    store_id: 1,
    name: '中原かりん',
    age: 24
  },
  {
    store_id: 1,
    name: '佐藤りんか',
    age: 19
  },
  {
    store_id: 1,
    name: 'はな',
    age: 27
  }
]
Girl.delete_all
Girl.create!(girls)
