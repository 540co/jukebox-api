class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.belongs_to :album, null: false, index: true
      t.string :title, null: false
      t.string :duration
      t.timestamps
    end
  end
end
