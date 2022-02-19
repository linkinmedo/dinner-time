# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_02_19_034511) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authors", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "budgets", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "difficulties", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ingredients_recipes", id: false, force: :cascade do |t|
    t.bigint "recipe_id", null: false
    t.bigint "ingredient_id", null: false
    t.index ["ingredient_id"], name: "index_ingredients_recipes_on_ingredient_id"
    t.index ["recipe_id"], name: "index_ingredients_recipes_on_recipe_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.float "rate", default: 0.0
    t.text "author_tip"
    t.string "prep_time"
    t.string "name"
    t.string "people_quantity"
    t.string "cook_time"
    t.string "total_time"
    t.string "image"
    t.integer "nb_comments", default: 0
    t.bigint "author_id", null: false
    t.bigint "budget_id", null: false
    t.bigint "difficulty_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["author_id"], name: "index_recipes_on_author_id"
    t.index ["budget_id"], name: "index_recipes_on_budget_id"
    t.index ["difficulty_id"], name: "index_recipes_on_difficulty_id"
  end

  create_table "recipes_tags", id: false, force: :cascade do |t|
    t.bigint "recipe_id", null: false
    t.bigint "tag_id", null: false
    t.index ["recipe_id"], name: "index_recipes_tags_on_recipe_id"
    t.index ["tag_id"], name: "index_recipes_tags_on_tag_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "recipes", "authors"
  add_foreign_key "recipes", "budgets"
  add_foreign_key "recipes", "difficulties"
end
