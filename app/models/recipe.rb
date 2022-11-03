class Recipe < ApplicationRecord
    has_many :recipefoods,-> { order('food_id ASC') },dependent: :destroy
    has_many :foods, through: :recipefoods
    accepts_nested_attributes_for :recipefoods
end
