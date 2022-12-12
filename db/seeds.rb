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
      {
        title: "Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Charcoal",
        description: "A glorified $200 alarm clock with a big screen thats not even made by apple ",
        category: "electronics",
        price: 184.99,
        file: "https://amazish-seeds.s3.amazonaws.com/3-echo-show.jpg",
        fileName: "3-echo-show.jpg",
      }, 
      {
        title: "AstroAI 27 Inch Snow Brush and Detachable Ice Scraper with Ergonomic Foam Grip for Cars, Trucks, SUVs (Heavy Duty ABS, PVC Brush)",
        description: "Its a brush, LOOK AT IT",
        category: "cleaning",
        price: 16.49,
        file: "https://amazish-seeds.s3.amazonaws.com/4-brush.jpg",
        fileName: "4-brush.jpg",
      }, 
      {
        title: "Ecolution Patented Micro-Pop Microwave Popcorn Popper with Temperature Safe Glass, 3-in-1 Lid Measures Kernels and Melts Butter, Made Without BPA, Dishwasher Safe, 3-Quart, Red",
        description: "If you can only have 5 popcorns, this is it",
        category: "food",
        price: 15.99,
        file: "https://amazish-seeds.s3.amazonaws.com/5-jarthingy.jpg",
        fileName: "5-jarthingy.jpg",
      }, 
      {
        title: "Lightsaber Chopsticks Light Up - LED Glowing Light Saber Star Wars Chop Sticks - Reusable Sushi Lightup Sabers Chopstick Set Of 1 Blue Pair",
        description: "RGB chopsticks automatically adds 10 more servings",
        category: "food",
        price: 11.97,
        file: "https://amazish-seeds.s3.amazonaws.com/6-rgbsticks.jpg",
        fileName: "6-rgbsticks.jpg",
      }, 
      {
        title: "SHASHIBO Shape Shifting Box - Award-Winning, Patented Fidget Cube w/ 36 Rare Earth Magnets - Transforms Into Over 70 Shapes, Download Fun in Motion Toys Mobile App (Original Series - Spaced Out)",
        description: "Be as confused as your kids looking at this thing",
        category: "toys",
        price: 25.00,
        file: "https://amazish-seeds.s3.amazonaws.com/7-cube.jpg",
        fileName: "7-cube.jpg",
      }, 
      {
        title: "Jimmy's black Beanie",
        description: "This is the start of becoming the baddest jimbo in town",
        category: "clothes",
        price: 19.99,
        file: "https://amazish-seeds.s3.amazonaws.com/8-beanie.jpg",
        fileName: "8-beanie.jpg",
      }, 
      {
        title: "Chapstick Lip Tube (Pack of 3)",
        description: "Shipping this and receiving returns actually cost around 12 packs of these",
        category: "beauty",
        price: 2.95,
        file: "https://amazish-seeds.s3.amazonaws.com/9-chappy.jpg",
        fileName: "9-chappy.jpg",
      }, 
      {
        title: "Fancy Feast Purina Wet Cat Food Variety Packs",
        description: "meow fancyaaaaaa",
        category: "pets",
        price: 18.99,
        file: "https://amazish-seeds.s3.amazonaws.com/10-cat-food.jpg",
        fileName: "10-cat-food.jpg",
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