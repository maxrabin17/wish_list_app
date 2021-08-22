class WishSerializer < ActiveModel::Serializer
  attributes :id, :item, :price, :image_url, :group
end
