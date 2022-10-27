class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :ave_expiration_length, :url

  has_many :pantryitems
end
