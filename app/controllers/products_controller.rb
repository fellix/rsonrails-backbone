class ProductsController < ApplicationController
  respond_to :json

  def index
    @products = Product.ordered

    respond_with @products
  end

  def create
    @product = Product.new(product_params)
    @product.save

    respond_with @product
  end

  def show
    @product = Product.find(params[:id])

    respond_with @product
  end

  protected

  def product_params
    params.require(:product).permit(:name, :description, :contact_email)
  end
end
