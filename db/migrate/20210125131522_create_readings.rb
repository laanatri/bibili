class CreateReadings < ActiveRecord::Migration[6.0]
  def change
    create_table :readings do |t|
      t.references :user
      t.references :book
      t.string :reading_state
      t.integer :reading_percentage
      t.integer :reading_rate
      t.string :reading_comment
      t.timestamps
    end
  end
end
