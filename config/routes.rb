Rails.application.routes.draw do
	namespace :api do
    	resources :users do
    		 resources :blood_sugars, :carb_total  
		end
	end
end