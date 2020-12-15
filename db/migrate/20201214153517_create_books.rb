class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string      :book_name
      t.integer     :isbn, default: '', null: false
      t.references  :author, foreign_key: true
      t.string      :publisher, default: '', null: false
      t.string      :collection, default: '', null: false
      t.text        :summary, default: '', null: false
      t.integer     :number_readings, default: '', null: false
      t.string      :format, default: '', null: false
      t.integer     :pages, default: '', null: false
      t.string      :size, default: '', null: false
      t.timestamps
    end
  end
end
