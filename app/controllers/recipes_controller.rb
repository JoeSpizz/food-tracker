class RecipesController < ApplicationController

    def create 
         recipe = Recipe.create(recipe_params)
        ings = params[:ingredients_attributes]
        byebug
        join = ings.map{|item| Recipefood.create(food_params)}
        render json: recipe, status: :created
    end

    private 
    def recipe_params
        params.permit(
            :name,
            :url, :ingredients_attributes, :recipe)
    end
    def food_params
        params.permit(
    :food_id, :recipe_id, :quantity)
        end
end
