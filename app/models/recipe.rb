class Recipe < ApplicationRecord
    has_many :recipefoods, dependent: :destroy
    has_many :foods, through: :recipefoods
end
