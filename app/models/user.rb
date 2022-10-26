class User < ApplicationRecord
    has_secure_password
    has_many :pantryitems 
    has_many :foods, through: :pantryitems

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true
end
