class Api::BloodSugarsController < ApplicationController
def index
		@user = User.find params[:user_id]
		@blood_sugars = @user.blood_sugars.all
		render json: 
			@blood_sugars 

end	

	def create
		@blood_sugar = Blood_sugar.create!(blood_sugar_params)
		redirect_to blood_sugar_path(@blood_sugar)
end
def show
    @blood_sugar = blood_sugar.find(params[:id])
    render json: @blood_sugar
  end

  def update
    @blood_sugar = Blood_sugar.find(params[:id])
    @blood_sugar.update!(blood_sugar_path_params)
    redirect_to blood_sugar_path(@blood_sugar_total)
  end

  def destroy
    @blood_sugar = Blood_sugar.find(params[:id])
    @blood_sugar = blood_sugar.find(params[:id])
    @blood_sugar.destroy
    redirect_to blood_sugar_path
  end

  private

  def blood_sugar_params
    params.require(:blood_sugar).permit(:glucose, :two_hours_later,)
  
  end
end




