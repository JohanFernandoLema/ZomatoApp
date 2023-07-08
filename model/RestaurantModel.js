const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
  // Restaurant data goes here, from document professor will send to us
})

const RestaurantModel = mongoose.model(
  'restaurant',
  RestaurantSchema,
  'restaurants'
)
module.exports = LocationModel
