class FoodsController < ApplicationController
    def index 
        foods = Food.all 
        render json: foods, status: :ok 
    end
    def show
        byebug
        food = Food.find_by(name: params[:name])
        render json: food, status: :ok 
    end
    def create 
        food = Food.create(name: params[:name], url: params[:url], ave_expiration_length: params[:ave_expiration_length], category: params[:category])
        render json: food, status: :created
    end
    def destroy 
        food = Food.find_by(id: params(:id))
        food.destroy 
        head :no_content
    end
end
