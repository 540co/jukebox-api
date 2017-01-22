require 'rails_helper'

RSpec.describe PlaylistSong, type: :model do
  # Test Validations
  it { should validate_presence_of(:playlist) }
  it { should validate_presence_of(:song) }

  # Test Associations
  it { should belong_to(:playlist) }
  it { should belong_to(:song) }
end
