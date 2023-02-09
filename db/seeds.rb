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
        rating: 4,
        file: "https://amazish-seeds.s3.amazonaws.com/1-echo.jpg",
        fileName: "1-echo.jpg",
      }, 
      {
        title: "Amazon Fire 7 Kids tablet, 7 display, ages 3-7, with ad-free content kids love, 2-year worry-free guarantee, parental controls, 16 GB, (2022 release), Blue",
        description: "A loud, maddenly slow contraption for all adults to focus their anger on",
        category: "electronics",
        price: 59.99,
        rating: 2,
        file: "https://amazish-seeds.s3.amazonaws.com/2-fire-tablet-kids.jpg",
        fileName: "2-fire-tablet-kids.jpg",
      }, 
      {
        title: "Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Charcoal",
        description: "A glorified $200 alarm clock with a big screen thats not even made by apple ",
        category: "electronics",
        price: 184.99,
        rating: 3,
        file: "https://amazish-seeds.s3.amazonaws.com/3-echo-show.jpg",
        fileName: "3-echo-show.jpg",
      }, 
      {
        title: "AstroAI 27 Inch Snow Brush and Detachable Ice Scraper with Ergonomic Foam Grip for Cars, Trucks, SUVs (Heavy Duty ABS, PVC Brush)",
        description: "Its a brush, LOOK AT IT",
        category: "cleaning",
        price: 16.49,
        rating: 5,
        file: "https://amazish-seeds.s3.amazonaws.com/4-brush.jpg",
        fileName: "4-brush.jpg",
      }, 
      {
        title: "Ecolution Patented Micro-Pop Microwave Popcorn Popper with Temperature Safe Glass, 3-in-1 Lid Measures Kernels and Melts Butter, Made Without BPA, Dishwasher Safe, 3-Quart, Red",
        description: "If you can only have 5 popcorns, this is it",
        category: "food",
        price: 15.99,
        rating: 5,
        file: "https://amazish-seeds.s3.amazonaws.com/5-jarthingy.jpg",
        fileName: "5-jarthingy.jpg",
      }, 
      {
        title: "Lightsaber Chopsticks Light Up - LED Glowing Light Saber Star Wars Chop Sticks - Reusable Sushi Lightup Sabers Chopstick Set Of 1 Blue Pair",
        description: "RGB chopsticks automatically adds 10 more servings",
        category: "food",
        price: 11.97,
        rating: 3,
        file: "https://amazish-seeds.s3.amazonaws.com/6-rgbsticks.jpg",
        fileName: "6-rgbsticks.jpg",
      }, 
      {
        title: "SHASHIBO Shape Shifting Box - Award-Winning, Patented Fidget Cube w/ 36 Rare Earth Magnets - Transforms Into Over 70 Shapes, Download Fun in Motion Toys Mobile App (Original Series - Spaced Out)",
        description: "Be as confused as your kids looking at this thing",
        category: "toys",
        price: 25.00,
        rating: 5,
        file: "https://amazish-seeds.s3.amazonaws.com/7-cube.jpg",
        fileName: "7-cube.jpg",
      }, 
      {
        title: "Jimmy's black Beanie",
        description: "This is the start of becoming the baddest jimbo in town",
        category: "clothes",
        price: 19.99,
        rating: 5,
        file: "https://amazish-seeds.s3.amazonaws.com/8-beanie.jpg",
        fileName: "8-beanie.jpg",
      }, 
      {
        title: "Chapstick Lip Tube (Pack of 3)",
        description: "Shipping this and receiving returns actually cost around 12 packs of these",
        category: "beauty",
        price: 2.95,
        rating: 3,
        file: "https://amazish-seeds.s3.amazonaws.com/9-chappy.jpg",
        fileName: "9-chappy.jpg",
      }, 
      {
        title: "Fancy Feast Purina Wet Cat Food Variety Packs",
        description: "meow fancyaaaaaa",
        category: "pets",
        price: 18.99,
        rating: 5,
        file: "https://amazish-seeds.s3.amazonaws.com/10-cat-food.jpg",
        fileName: "10-cat-food.jpg",
      }, 
      {
        title: "Star Wars The Black Series The Mandalorian, Ahsoka Tano & Grogu Toy 6-Inch-Scale",
        description: "THE MANDALORIAN, AHSOKA TANO & GROGU: The Mandalorian seeks out Ahsoka Tano to help reveal the Child’s past and light the way to his future
        THE MANDALORIAN: Fans and collectors can imagine scenes from the Star Wars Galaxy with this premium 3-pack inspired by The Mandalorian live-action series on Disney",
        category: "toys",
        price: 66.99,
        rating: 3,
        file: "https://amazish-seeds.s3.amazonaws.com/ezgif.com-gif-maker.jpg",
        fileName: "11-starwars-1.jpg",
      }, 
      {
        title: "Octopus Plush Stuffed Animal 15.8, Cute Soft Squishy Octopus Plushie",
        description: "High quality short plush fabric, filled with PP cotton. Comfortable and flexible, delicate feel, not easy to deform, super soft & comfortable to touch.",
        category: "toys",
        price: 23.99,
        rating: 5,
        file: "https://amazish-seeds.s3.amazonaws.com/ezgif.com-gif-maker+(1).jpg",
        fileName: "12-tako-plushie-1.jpg",
      }, 
      {
        title: "Amazon Basics Stainless Steel Dinner Spoons with Round Edge, Pack of 12",
        description: "Set of 12 stainless steel spoons for dining room, kitchen or restaurant use",
        category: "kitchen",
        price: 10.79,
        rating: 5,
        file: "https://amazish-seeds.s3.amazonaws.com/ezgif.com-gif-maker+(2).jpg",
        fileName: "13-shiny-spoon.jpg",
      }, 
      {
        title: "Lysol Concentrate All Purpose Cleaner Disinfectant, 12 Ounce (Pack of 2)",
        description: "Lysol Brand Concentrate dilutes to make 9 gallons of Lysol Disinfectant cleaner",
        category: "cleaning",
        price: 8.54,
        rating: 4,
        file: "https://amazish-seeds.s3.amazonaws.com/ezgif.com-gif-maker+(3).jpg",
        fileName: "14-lysol-2.jpg",
      }, 
      {
        title: "Senneny Dog Christmas Toys with Squeaker",
        description: "Dogs Preferred Christmas Gift：An adorable stuffed reindeer with red antlers and a red nose will be your dog’s best friend to accompany him/her through day and night.",
        category: "pets",
        price: 12.99,
        rating: 5,
        file: "https://amazish-seeds.s3.amazonaws.com/ezgif.com-gif-maker+(4).jpg",
        fileName: "15-pet-toy.jpg",
      }, 
      title: "OWUYUXI Chef Knife, 8 Inch Kitchen Knife, Professional Japanese AUS-10V Super Stainless Steel Chefs Knife with Ergonomic Handle, Durable Sharp Cooking Knife with Gift Box",
      description: "This 8 inch Professional chef's knife designed to perform well at many differing kitchen tasks， It can be used for your daily kitchen tasks of chopping, slicing, dicing and mincing of all kinds of meat, vegetables, fruits and bread. This chef knife has been the top choice of both home chefs and professionals alike.",
      category: "kitchen",
      price: 19.99,
      rating: 5,
      file: "https://amazish-seeds.s3.amazonaws.com/11-knife.jpg",
      fileName: "15-pet-toy.jpg",

    
    ]
       PRODUCTS.each do |product|
         keys = {
           title: product[:title],
           description: product[:description],
           category: product[:category],
           price: product[:price],
           rating: product[:rating]
         }
         obj = Product.create(keys)
         file = URI.open(product[:file])
         obj.photo.attach(io: file, filename: product[:fileName])
       end
     
       puts "Done!"
  end