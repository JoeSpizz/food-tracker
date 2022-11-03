class RecipesController < ApplicationController
    def index 
        recipes=Recipe.all 
        render json: recipes, status: :ok
    end

    def create 
        recipe = Recipe.create!(recipe_params)
        ings = params[:ingredients_attributes]
        join = ings.map{|item| Recipefood.create!(food_id: item[:food_id], recipe_id: recipe.id, quantity: item[:quantity])}
        render json: recipe, status: :created
    end

    def update
        recipe = Recipe.find_by(id: params[:id])
        recipe.url=params[:url]
        recipe.save
        render json: recipe, status: :accepted 
    end

    def destroy 
        recipe = Recipe.find_by(id: params[:id])
        recipe.destroy 
        head :no_content
    end
# The join = ings.map is not properly taking the parameters
    private 
    def recipe_params
        params.permit(:name, 
            :url, :ingredients_attributes)
    end
end
