class WishSerializer < ActiveModel::Serializer
  attributes :id, :item, :price, :image_url
  belongs_to :group
end
