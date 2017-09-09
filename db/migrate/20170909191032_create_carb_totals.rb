class CreateCarbTotals < ActiveRecord::Migration[5.1]
  def change
    create_table :carb_totals do |t|
      t.string :interger
      t.string :,
      t.string :InsulinUsed
      t.string :interger

      t.timestamps
    end
  end
end
