class Album < ApplicationRecord
  belongs_to :artist
  has_many :songs
  validates :artist, presence: true
  validates :title, presence: true
end
