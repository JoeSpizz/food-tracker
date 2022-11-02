class RecipefoodSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :food_id, :recipe_id
  has_one :recipe
end
