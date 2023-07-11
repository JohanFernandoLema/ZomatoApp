const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
  name: { type: String },
  city_name: { type: String },
  city: { type: Number },
  area: { type: Number },
  locality: { type: String },
  thumb: { type: String },
  cost: { type: Number },
  address: { type: String },
  type: { type: Array },
  Cuisine: { type: Array },
  location_id: { type: Number },
})

const RestaurantModel = mongoose.model(
  'restaurant',
  RestaurantSchema,
  'restaurants'
)
module.exports = RestaurantModel
