class Wishlist < ApplicationRecord
  belongs_to :user
  has_many :book
end
