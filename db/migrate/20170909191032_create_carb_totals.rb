class CreateCarbTotals < ActiveRecord::Migration[5.1]
  def change
    create_table :carb_totals do |t|
      t.integer :carbs_in_meal
      t.integer :insulin_used
     

      t.timestamps
    end
  end
end
