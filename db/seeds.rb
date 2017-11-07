# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Picture.destroy_all

pictures = []

wall = Picture.create(
    name: "DC or Nothing (Signed by John Wall)",
    price: 1000,
    size: "30 x 40",
    prints: "Available",
    photo_url: "https://i.imgur.com/ejpzZOO.jpg",
    sold: false 
)

free = Picture.create(
    name: "Run Free (Signed by Devonta Freeman)",
    price: 750,
    size: "16 x 20",
    prints: "Available",
    photo_url: "https://i.imgur.com/gt6iqL4.jpg",
    sold: false 
)

migos = Picture.create(
    name: "Do It Look Like I was left off Bad &amp; Boujee",
    price: 300,
    size: "18 x 24",
    prints: "Not Available",
    photo_url: "https://i.imgur.com/JL1rknN.jpg",
    sold: true 
)

dbz = Picture.create(
    name: "SSJ2 Gohan",
    price: 375,
    size: "28 x 36",
    prints: "Not Available",
    photo_url: "https://i.imgur.com/8IJKjx0.jpg",
    sold: true
)

chance = Picture.create(
    name: "Chance the Rapper",
    price: 350,
    size: "12 x 24 (3 pieces)",
    prints: "Not Available",
    photo_url: "https://i.imgur.com/FfvWKEG.jpg",
    sold: true
)

scarface = Picture.create(
    name: "The World is Yours",
    price: 300, 
    size: "18 x 24",
    prints: "Not Available", 
    photo_url: "https://i.imgur.com/wTyM4rU.jpg",
    sold: true
)

jesus = Picture.create(
    name: "Jesus For Three",
    price: 300,
    size: "12 x 24",
    prints: "Not Available",
    photo_url: "https://i.imgur.com/Cz9MpqD.jpg",
    sold: true
)

joker = Picture.create(
    name: "Why So Serious",
    price: 185,
    size: "18 x 24",
    prints: "Available",
    photo_url: "https://i.imgur.com/9ceVR08.jpg",
    sold: false
)

malcom = Picture.create(
    name: "X x Pac",
    price: 375,
    size: "28 x 36",
    prints: "Not Available",
    photo_url: "https://i.imgur.com/qtn3fbR.jpg",
    sold: true
)