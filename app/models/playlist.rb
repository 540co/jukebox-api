class Playlist < ApplicationRecord
  belongs_to :user
  has_many :playlist_songs
  has_many :songs, through: :playlist_songs
  validates :user, presence: true
  validates :name, presence: true
end
