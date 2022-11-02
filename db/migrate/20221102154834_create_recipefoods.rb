class CreateRecipefoods < ActiveRecord::Migration[6.1]
  def change
    create_table :recipefoods do |t|
      t.integer :quantity
      t.belongs_to :recipe, null: false, foreign_key: true
      t.belongs_to :food, null: false, foreign_key: true

      t.timestamps
    end
  end
end
