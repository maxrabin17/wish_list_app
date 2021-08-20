class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :wishes, serializer: WishSerializer
end
