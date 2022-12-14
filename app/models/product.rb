class Product < ApplicationRecord
    validates :title, :description, :category, :price, :rating, presence: true

    has_one_attached :photo
    has_many :carts
end