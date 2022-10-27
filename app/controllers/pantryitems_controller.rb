class PantryitemsController < ApplicationController

    def index
        user = @current_user
        pantry = user.foods.uniq
        render json: pantry, include: :pantryitems
        # nest within this the pantryitem expiration
    end

    def create 
        test = Pantryitem.find_by(food_id: params[:id])
        if test
           test.quantity +=1
           test.save
           render json: test, status: :created
        else
        food = Pantryitem.create(user_id: session[:user_id], food_id: params[:id], expiration_date: params[:expiration], quantity: 1)
        render json: food, status: :created
        end
    end

    def destroy 
        food = Pantryitem.find_by(food_id: params[:id])
        if food.quantity > 1
            food.quantity -= 1
            food.save
            head :no_content
        else
        food.destroy
        head :no_content
        end
    end
end
