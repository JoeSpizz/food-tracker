class Food < ApplicationRecord
    has_many :pantryitems, dependent: :destroy
    has_many :users, through: :pantryitems
end
