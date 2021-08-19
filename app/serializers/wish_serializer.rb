class WishSerializer < ActiveModel::Serializer
  attributes :id, :item, :price, :image_url

  # def group
  #   {group: self.object.group.title}
  # end
end
