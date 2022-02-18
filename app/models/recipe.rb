class Recipe < ApplicationRecord
  has_and_belongs_to_many :ingredients
  has_and_belongs_to_many :tags
  belongs_to :author
  belongs_to :budget
  belongs_to :difficulty
end
