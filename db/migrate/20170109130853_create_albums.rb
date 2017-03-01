class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.belongs_to :artist, null: false, index: true
      t.string :title, null: false
      t.string :cover_art
      t.date :released_on
      t.timestamps
    end
  end
end
