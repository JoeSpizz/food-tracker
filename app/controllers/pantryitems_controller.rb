class PantryitemsController < ApplicationController

    def index
        user = @current_user
        pantry = user.foods
        render json: pantry, status: :ok 
    end

    def create 
        food = Pantryitem.create(user_id: session[:user_id], food_id: params[:id], expiration_date: params[:expiration])
        render json: food, status: :created
    end
end
