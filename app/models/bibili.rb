class Bibili < ApplicationRecord
  belongs_to :user
  has_many :book
end
