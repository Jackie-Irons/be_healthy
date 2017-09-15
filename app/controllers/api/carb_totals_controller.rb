class Api::CarbTotalController < ApplicationController
  before_action :authenticate_user!
	def index
		@carb_totals = Carb_total.all
		render json: @carb_totals 
end	
def show
    @carb_total = Carb_total.find(params[:id])
    render json: @carb_total
  end
	def create
		@carb_total = Carb_total.create!(user_params)
		redirect_to carb_total_path(@carb_total)
end


  def update
    @carb_total = Carb_total.find(params[:id])
    @carb_total.update!(carb_total_path_params)
    redirect_to carb_total_path(@carb_total)
  end

  def destroy
    @carb_total = Carb_total.find(params[:id])
    @carb_total = carb_total.find(params[:id])
    @carb_total.destroy
    redirect_to carb_total_path
  end

  private

  def carb_total_params
    params.require(:carb_total).permit(:carbs_in_meal, :insulin_used,)
  
  end
end



