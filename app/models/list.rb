class List < ApplicationRecord
  belongs_to :user
  has_many :books, through: :book_list
end
