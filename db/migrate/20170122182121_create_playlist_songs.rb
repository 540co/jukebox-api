class CreatePlaylistSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_songs do |t|
      t.belongs_to :playlist, null: false, index: true
      t.belongs_to :song, null: false, index: true
      t.timestamps
    end
  end
end
