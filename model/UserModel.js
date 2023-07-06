// import mongoose
const mongoose = require('mongoose')
// create a schema
const UserSchema = new mongoose.Schema({
  first_name: { type: String },
  last: { type: String },
  email: { type: String },
  gender: { type: String },
  mobile: { type: Number },
  password: { type: String },
})

// create a model
// model structure {name - Schema - collectionName}
const UserModel = mongoose.model('user', UserSchema, 'restaurantDB')

module.exports = UserModel
