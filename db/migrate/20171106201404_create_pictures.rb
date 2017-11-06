class CreatePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.string :name
      t.string :price
      t.string :size
      t.string :prints
      t.string :photo_url

      t.timestamps
    end
  end
end
