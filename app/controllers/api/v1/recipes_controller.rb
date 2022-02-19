class Api::V1::RecipesController < ApplicationController
  MAX_PAGE_LIMIT = 100

  def index
    @recipes = Recipe.filter(params[:tags]).order(order).limit(limit).offset(params[:offset])

    render json: @recipes, include: %w[tags budget difficulty author]
  end

  def show
    @recipe = Recipe.find(params[:id])

    render json: @recipe, include: %w[tags ingredients budget difficulty author]
  end

  private

  def limit
    [
      params.fetch(:limit, MAX_PAGE_LIMIT).to_i,
      MAX_PAGE_LIMIT
    ].min
  end

  def order
    params.fetch(:order, 'rate DESC')
  end
end
