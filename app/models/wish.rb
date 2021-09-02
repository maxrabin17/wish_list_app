class Wish < ApplicationRecord
    has_many :comments
    belongs_to :user
    belongs_to :group
    validates :item, presence: true
    validates :price, presence: true
    validates :image_url, presence: true

    def self.search(name)
        Wish.where("item LIKE ?", "%#{name}%")
    end

    # scope :search, -> (name) {self.where("item LIKE ?", "%#{name}%")}

end
