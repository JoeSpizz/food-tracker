class RecipesController < ApplicationController

    def create 
        recipe = Recipe.create(name: params[:name], url: params[:url])
        render json: recipe, status: :created
    end
end
