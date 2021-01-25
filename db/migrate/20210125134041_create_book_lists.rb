class CreateBookLists < ActiveRecord::Migration[6.0]
  def change
    create_table :book_lists do |t|
      t.references :book
      t.references :list
      t.timestamps
    end
  end
end
