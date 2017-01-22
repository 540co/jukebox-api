require 'digest'

class User < ApplicationRecord
  has_many :playlists
  validates :username, presence: true
  validates :password_hash, presence: true
  validates :token, presence: true

  def password=(passwd)
    self.password_hash = Digest::MD5.hexdigest("#{self.username}:#{passwd}")
    self.token = Digest::MD5.hexdigest(self.password_hash)
  end
end
