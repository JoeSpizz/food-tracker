class RecipefoodSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :food_belongs_to
  has_one :recipe
end
