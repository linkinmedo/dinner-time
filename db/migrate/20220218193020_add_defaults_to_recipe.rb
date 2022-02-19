class AddDefaultsToRecipe < ActiveRecord::Migration[6.1]
  def change
    change_column_default :recipes, :rate, 0
    change_column_default :recipes, :nb_comments, 0
  end
end
