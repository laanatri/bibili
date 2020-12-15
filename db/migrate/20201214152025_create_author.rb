class CreateAuthor < ActiveRecord::Migration[6.0]
  def change
    create_table :authors do |t|
      t.string    :author_name
      t.text    :author_biographie, null: false, default: ''
      t.timestamps 
    end
  end
end
