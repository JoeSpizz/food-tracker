class User < ApplicationRecord
    has_secure_password
    has_one :fridge 
    has_many :foods, through: :fridge

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true
end
