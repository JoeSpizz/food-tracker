class RecipefoodsController < ApplicationController
    def index 
        recipefoods = Recipefood.all.sort_by{|item| item.food_id}
        render json: recipefoods, status: :ok
    end
    def show 
        recipefood = Recipefood.find_by(id: params[:id])
        # recipefood.sort_by{|item| item.food_id}
        render json: recipefood, status: :ok
    end
end
