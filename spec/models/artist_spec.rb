require 'rails_helper'

RSpec.describe Artist, type: :model do
  # Test Validations
  it { should validate_presence_of(:name) }

  # Test Associations
  it { should have_many(:albums) }
end
