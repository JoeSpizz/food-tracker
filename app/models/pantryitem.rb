class Pantryitem < ApplicationRecord
    belongs_to :user 
    belongs_to :food
end
