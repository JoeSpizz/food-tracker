class PantryitemSerializer < ActiveModel::Serializer
  attributes :id, :expiration_date, :quantity
end
