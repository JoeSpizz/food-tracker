class FoodsController < ApplicationController
   
    def index 
        foods = Food.all.order(:category)
        render json: foods, status: :ok 
    end
    def show
        food = Food.find_by(name: params[:name])
        render json: food, status: :ok 
    end
    # make the below params strong with params.require. set expiration to 0 if none
    def create 
        if params[:ave_expiration_length] == ""
        food = Food.create!(name: params[:name], url: params[:url], ave_expiration_length:365, category: params[:category])
        render json: food, status: :created
        else
         food = Food.create!(food_params)
        render json: food, status: :created
        end
    end

    def destroy 
        food = Food.find_by(id: params[:id])
        food.destroy 
        head :no_content
    end

private

def food_params
    params.permit(:name, :url, :ave_expiration_length, :category)
end

end