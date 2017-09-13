Rails.application.routes.draw do
	namespace :api do
    	resources :user do
    		 resources :blood_sugar, :carb_total  
		end
	end
end