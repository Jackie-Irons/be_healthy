class User < ApplicationRecord
	has_many :blood_sugars, dependent: :destroy
	has_many :carb_totals, dependent: :destroy
end
