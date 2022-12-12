# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    User.destroy_all
  
    User.create!(
      name: 'kyle Zish', 
      email: 'zish@amazon.io', 
      password: 'password'
    )
  
    puts "Done!"

    # Product.create!(
    #   title: 'Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal',
    #   description: 'A fuzzy round ball that can do stuff for you',
    #   category: 'electronics',
    #   price: 59.99
    # )
    PRODUCTS = [
      {
        title: 'Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal',
        description: 'A fuzzy round ball that can do stuff for you',
        category: 'electronics',
        price: 59.99,
        file: "https://amazish-seeds.s3.amazonaws.com/1-echo.jpg",
        fileName: "1-echo.jpg",
      }, 
      {
        title: "Amazon Fire 7 Kids tablet, 7 display, ages 3-7, with ad-free content kids love, 2-year worry-free guarantee, parental controls, 16 GB, (2022 release), Blue",
        description: "A loud, maddenly slow contraption for all adults to focus their anger on",
        category: "electronics",
        price: 59.99,
        file: "https://amazish-seeds.s3.amazonaws.com/2-fire-tablet-kids.jpg",
        fileName: "2-fire-tablet-kids.jpg",
      }, 
    
    ]
       PRODUCTS.each do |product|
         keys = {
           title: product[:title],
           description: product[:description],
           category: product[:category],
           price: product[:price]
         }
         obj = Product.create(keys)
         file = URI.open(product[:file])
         obj.photo.attach(io: file, filename: product[:fileName])
       end
     
       puts "Done!"
  end