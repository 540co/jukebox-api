require 'rails_helper'

RSpec.describe User, type: :model do
  # Test Validations
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_hash) }
  it { should validate_presence_of(:token) }

  # Test Associations
end
