class BookList < ApplicationRecord
  belongs_to :list, foreign_key: "list_id"
  belongs_to :book, foreign_key: "book_id"
end
