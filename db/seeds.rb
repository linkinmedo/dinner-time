# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
require 'json'

path = File.join(File.dirname(__FILE__), './recipes.json')

options = JSON.parse(IO.read(path))

puts 'seeding....'

Recipe.destroy_all
Difficulty.destroy_all
Budget.destroy_all
Tag.destroy_all
Ingredient.destroy_all
Author.destroy_all

options.each do |option|
  author = Author.find_or_create_by(name: option['author'])
  difficulty = Difficulty.find_or_create_by(name: option['difficulty'])
  budget = Budget.find_or_create_by(name: option['budget'])
  option['author'] = author
  option['difficulty'] = difficulty
  option['budget'] = budget
  option['ingredients'] = option['ingredients'].map { |i| Ingredient.find_or_create_by(description: i) }
  option['tags'] = option['tags'].map { |t| Tag.find_or_create_by(name: t) }
  recipe = Recipe.create(option)
  puts recipe
end

puts 'seeding done!'
