class AddSoldToPictures < ActiveRecord::Migration[5.1]
  def change
    add_column :pictures, :sold, :boolean
  end
end
