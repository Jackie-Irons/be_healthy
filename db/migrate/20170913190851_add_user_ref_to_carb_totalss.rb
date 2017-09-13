class AddUserRefToCarbTotalss < ActiveRecord::Migration[5.1]
  def change
    add_reference :carb_totals, :user, foreign_key: true
  end
end
