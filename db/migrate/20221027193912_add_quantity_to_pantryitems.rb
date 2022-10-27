class AddQuantityToPantryitems < ActiveRecord::Migration[6.1]
  def change
    add_column :pantryitems, :quantity, :integer
  end
end
