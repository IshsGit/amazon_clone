@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :title, :description, :category, :price
     
    end
end