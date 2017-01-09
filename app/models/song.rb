class Song < ApplicationRecord
  belongs_to :album
  validates :album, presence: true
  validates :title, presence: true
end
