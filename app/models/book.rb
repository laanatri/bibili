class Book < ApplicationRecord
  has_many :readings
  has_many :whishlists
  has_many :users, through: :readings
  has_many :users, through: :whishlist
  belongs_to :author
  belongs_to :publisher
  belongs_to :collection
end
