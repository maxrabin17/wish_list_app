class User < ApplicationRecord
    has_secure_password
    has_many :wishes
    has_many :groups, through: :wishes
    validates :username, uniqueness: true
end
