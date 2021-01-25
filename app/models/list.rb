class List < ApplicationRecord
  has_many :books, through: :book_list
end
