class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :validatable
  has_many :readings
  has_many :whishlists
  has_many :books, through: :readings
  has_many :books, through: :whishlists
end
