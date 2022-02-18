class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.float :rate
      t.text :author_tip
      t.string :prep_time
      t.string :name
      t.string :people_quantity
      t.string :cook_time
      t.string :total_time
      t.string :image
      t.integer :nb_comments
      t.references :author, null: false, foreign_key: true
      t.references :budget, null: false, foreign_key: true
      t.references :difficulty, null: false, foreign_key: true

      t.timestamps
    end
  end
end
