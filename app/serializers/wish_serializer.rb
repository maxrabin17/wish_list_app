class WishSerializer < ActiveModel::Serializer
  attributes :id, :item, :price, :image_url, :group
  # belongs_to :group
  # def group
  #   self.group.title
  # end
end
