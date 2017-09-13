class AddUserRefToBloodSugars < ActiveRecord::Migration[5.1]
  def change
    add_reference :blood_sugars, :user, foreign_key: true
  end
end
