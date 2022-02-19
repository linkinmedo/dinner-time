class AddDefaultValuesToRecipes < ActiveRecord::Migration[6.1]
  def change
    change_column_default(:recipes, :rate, from: nil, to: 0.0)
    change_column_default(:recipes, :nb_comments, from: nil, to: 0)
  end
end
