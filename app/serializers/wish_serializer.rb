class WishSerializer < ActiveModel::Serializer
  attributes :id, :item, :price, :image_url
  # belongs_to :user
  # belongs_to :group
  has_many :comments
end
