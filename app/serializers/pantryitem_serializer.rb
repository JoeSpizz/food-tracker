class PantryitemSerializer < ActiveModel::Serializer
  attributes :id, :food_id, :user_id, :expiration_date
end
