class Food < ApplicationRecord
    has_many :pantryitems 
    has_many :users, through: :pantryitems
end
