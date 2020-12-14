class Collection < ApplicationRecord
  has_many :books
  has_many :authors, through: :books
  belongs_to :publisher
end
