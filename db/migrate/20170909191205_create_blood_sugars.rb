class CreateBloodSugars < ActiveRecord::Migration[5.1]
  def change
    create_table :blood_sugars do |t|
      t.integer :glucose
      t.integer :two_hours_later
      t.timestamps
    end
  end
end
 