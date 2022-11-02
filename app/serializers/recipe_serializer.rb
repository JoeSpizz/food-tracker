class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :"name,", :url
  has_many :recipefoods
end
