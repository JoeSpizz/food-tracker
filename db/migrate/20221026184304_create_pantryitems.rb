class CreatePantryitems < ActiveRecord::Migration[6.1]
  def change
    create_table :pantryitems do |t|
      t.belongs_to :user
      t.belongs_to :food
      t.string :expiration_date

      t.timestamps
    end
  end
end
