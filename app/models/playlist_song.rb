class PlaylistSong < ApplicationRecord
  belongs_to :playlist
  belongs_to :song
  validates :playlist, presence: true
  validates :song, presence: true
end
