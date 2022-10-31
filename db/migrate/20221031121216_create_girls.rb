class CreateGirls < ActiveRecord::Migration[6.1]
  def change
    create_table :girls do |t|
      t.string :name
      t.integer :age

      t.timestamps
    end
  end
end
