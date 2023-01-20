json.product do
    json.photo @product.photo.url
    json.extract! @product, :id, :title, :description, :category, :price, :rating

end
