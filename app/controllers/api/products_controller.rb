class Api::ProductsController < ApplicationController
    # wrap_parameters include: Bench.attribute_names + [:photo], format: :multipart_form
 
    def index
        @products = Product.all
    end

    def show
  
        @product = Product.find(params[:id])

        render :show
    end
end