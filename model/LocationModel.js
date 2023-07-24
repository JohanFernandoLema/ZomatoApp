const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
  name: { type: String },
  city_id: { type: Number },
  location_id: { type: Number },
  country_name: { type: String },
  _id: { type: Number },
})

const LocationModel = mongoose.model('location', LocationSchema, 'locations')
module.exports = LocationModel
