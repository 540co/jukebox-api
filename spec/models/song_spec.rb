require 'rails_helper'

RSpec.describe Song, type: :model do
  # Test Validations
  it { should validate_presence_of(:album) }
  it { should validate_presence_of(:title) }

  # Test Associations
  it { should belong_to(:album) }
end
