class Book < ApplicationRecord
  has_many :lists, through: :book_list
end
