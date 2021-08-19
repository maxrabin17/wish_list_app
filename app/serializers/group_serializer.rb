class GroupSerializer < ActiveModel::Serializer
  attributes :id, :title
  # has_many :wishes
end
