class CreateWishes < ActiveRecord::Migration[6.1]
  def change
    create_table :wishes do |t|
      t.string :item
      t.integer :price
      t.string :image_url
      t.integer :user_id
      t.integer :group_id

      t.timestamps
    end
  end
end
