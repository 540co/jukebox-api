require 'rails_helper'

RSpec.describe Playlist, type: :model do
  # Test Validations
  it { should validate_presence_of(:user) }
  it { should validate_presence_of(:name) }

  # Test Associations
  it { should belong_to(:user) }
  it { should have_many(:playlist_songs) }
  it { should have_many(:songs).through(:playlist_songs) }
end
