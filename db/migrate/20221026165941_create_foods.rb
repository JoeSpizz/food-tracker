class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.string :category
      t.integer :ave_expiration_length

      t.timestamps
    end
  end
end
