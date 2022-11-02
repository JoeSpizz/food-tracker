class RecipesController < ApplicationController

    def create 
         recipe = Recipe.create(recipe_params)
        ings = params[:ingredients_attributes]
        join = ings.map{|item| Recipefood.create(food_id: item[:food_id], recipe_id: recipe.id, quantity: item[:quantity])}
        render json: recipe, status: :created
    end
# The join = ings.map is not properly taking the parameters
    private 
    def recipe_params
        params.permit(
            :name,
            :url, :ingredients_attributes)
    end
end
