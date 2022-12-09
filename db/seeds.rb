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

    Product.create!(
      title: 'Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal',
      description: 'A fuzzy round ball that can do stuff for you',
      category: 'electronics',
      price: 59.99
    )

    puts "Done!"
  end