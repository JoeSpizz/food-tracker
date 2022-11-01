class Food < ApplicationRecord
    has_many :pantryitems, dependent: :destroy
    has_many :users, through: :pantryitems

    validates :name, presence: true
    validates :ave_expiration_length, presence: true
    validates :ave_expiration_length, numericality: { only_integer: true }
    validates :url, presence: true 
    validates :category, presence: true
end
