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
        # We want to add in code to the foods controller so that if someone sends information for a new food with no expiration length the default is setting it to 365
        # food = Food.create!(name: params[:name], url: params[:url], ave_expiration_length: params[:ave_expiration_length], category: params[:category])
        # food = Food.new(name: params[:name], ave_expiration_length: 365, category: params[:category])
        food = Food.create!(ave_expiration_length: 365, food_params)
        byebug
        render json: food, status: :created
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