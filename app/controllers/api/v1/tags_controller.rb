class Api::V1::TagsController < ApplicationController
  def index
    @tags = Tag.order('name ASC')

    render json: @tags
  end
end
