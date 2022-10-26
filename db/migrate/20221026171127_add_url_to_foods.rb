class AddUrlToFoods < ActiveRecord::Migration[6.1]
  def change
    add_column :foods, :url, :string
  end
end
