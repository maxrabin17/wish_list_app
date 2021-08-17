class Wish < ApplicationRecord
    has_many :comments
    belongs_to :user
    belongs_to :group
    validates :item, presence: true
    validates :price, presence: true
    validates :image_url, presence: true
end
