class User < ApplicationRecord
    has_secure_password
    has_many :wishes
    has_many :groups, through: :wishes
    validates :username, uniqueness: true, presence: true
    validates :username, length: { minimum: 2 }
    validates :password, presence: true
    validates :password, length: { minimum: 4 }
    validates :password_confirmation, presence: true
end
