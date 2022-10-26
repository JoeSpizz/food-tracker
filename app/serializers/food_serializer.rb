class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :ave_expiration_length
end
