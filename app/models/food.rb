class Food < ApplicationRecord
    has_many :pantryitems, dependent: :destroy
    has_many :users, through: :pantryitems
    has_many :recipefoods
    has_many :recipes, through: :recipefoods

    validates :name, presence: true
    validates :ave_expiration_length, numericality: { only_integer: true }
    validates :category, presence: true
end
