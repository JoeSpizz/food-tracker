class FoodsController < ApplicationController
    def index 
        foods = Food.all 
        render json: foods, status: :ok 
    end
end
