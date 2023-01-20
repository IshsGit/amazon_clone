json.product do
    json.photo @product.photo.url
    json.extract! @product, :id, :title, :description, :category, :price, :rating
    sum = 0
@product.reviews.each do |review|
    sum = sum + review.rating
end
if sum == 0
    ratings = 0
else
    ratings = sum / @product.reviews.length unless sum == 0
end
json.ratings ratings
json.reviewCount @product.reviews.length
end
