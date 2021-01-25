class Reading < ApplicationRecord
  has_one :book, foreign_key: "book_id"
  belongs_to :user, foreign_key: "user_id"
end
