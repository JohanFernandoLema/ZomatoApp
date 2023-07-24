const mongoose = require('mongoose')

const MealTypeSchema = new mongoose.Schema({
  _id: { type: Number },
  name: { type: String },
  content: { type: String },
  image: { type: String },
})

const MealTypeModel = mongoose.model('mealtype', MealTypeSchema, 'mealTypes')
module.exports = MealTypeModel
