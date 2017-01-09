require 'rails_helper'

RSpec.describe Album, type: :model do
  # Test Validations
  it { should validate_presence_of(:artist) }
  it { should validate_presence_of(:title) }

  # Test Associations
  it { should belong_to(:artist) }
  it { should have_many(:songs) }
end
