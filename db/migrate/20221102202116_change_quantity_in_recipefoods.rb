class ChangeQuantityInRecipefoods < ActiveRecord::Migration[6.1]
  def change
    change_column :recipefoods, :quantity, :string
  end
end
