class Recipefood < ApplicationRecord
  belongs_to :recipe
  belongs_to :food

  validates :food_id, presence: true
  validates :quantity, presence: true
end
