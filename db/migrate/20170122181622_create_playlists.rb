class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.belongs_to :user, null: false, index: true
      t.string :name, null: false
      t.timestamps
    end
  end
end
