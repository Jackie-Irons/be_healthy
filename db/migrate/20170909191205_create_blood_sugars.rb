class CreateBloodSugars < ActiveRecord::Migration[5.1]
  def change
    create_table :blood_sugars do |t|
      t.string :interger

      t.timestamps
    end
  end
end
