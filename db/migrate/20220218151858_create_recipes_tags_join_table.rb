class CreateRecipesTagsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :recipes, :tags do |t|
      t.index :recipe_id
      t.index :tag_id
    end
  end
end
