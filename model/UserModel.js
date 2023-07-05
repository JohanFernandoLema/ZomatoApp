// import mongoose
const mongoose = require('mongoose')
// create a schema
const UserSchema = new mongoose.Schema({
  id: { type: Number },
  first_name: { type: String },
  last: { type: String },
  email: { type: String },
  gender: { type: String },
})

// create a model
// model structure {name - Schema - collectionName}
const UserModel = mongoose.model('user', UserSchema, 'restaurantDB')

module.exports = UserModel
