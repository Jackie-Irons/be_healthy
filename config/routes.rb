Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
	namespace :api do
    	resources :users do
    		 resources :blood_sugars, :carb_total  
		end
	end
end