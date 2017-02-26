class ErrorSerializer < ActiveModel::Serializer
  attributes :developer_message, :error_code
  attribute :user_message, if: :user_message?
  attribute :more_info, if: :more_info?

  def user_message?
    true if object.user_message
  end

  def more_info?
    true if object.more_info
  end
end
