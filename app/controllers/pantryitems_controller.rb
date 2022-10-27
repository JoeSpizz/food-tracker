class PantryitemsController < ApplicationController

    def index
        user = @current_user
        pantry = user.foods.uniq
        render json: pantry, include: :pantryitems
        # nest within this the pantryitem expiration
    end

    def create 
        food = Pantryitem.create(user_id: session[:user_id], food_id: params[:id], expiration_date: params[:expiration])
        render json: food, status: :created
    end

    def destroy 
        food = Pantryitem.find_by(food_id: params[:id])
        food.destroy
        head :no_content
    end
end
