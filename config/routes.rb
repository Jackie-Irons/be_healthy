Rails.application.routes.draw do
namespace :api do
    resources :user do
    resources :blood_sugar, :carb_total  [:index, :show]
end
end
end