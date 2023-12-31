const express = require('express')
const app = express()

//Connect to the database
// 1- import mongoose (install)
const mongoose = require('mongoose')

const AppRouter = require('./routes/AppRoutes')
const cors = require('cors')
const PORT = 3300

// enable cors
app.use(cors())
// body parser
app.use(express.json()) //allow to raw data
app.use(express.urlencoded({ extended: false })) //able form data

// adding routes
app.use('/api', AppRouter)
// AppRouter.get('/get-user-list',)

// 2- use the url located in the command promp at the moment of typing mongosh
const MONGO_DB_URI = 'mongodb://127.0.0.1:27017/restaurantData'

// call mongoose with a promise
mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log('DB connected successfully')
    app.listen(PORT, () => {
      console.log('We are on')
    })
  })
  .catch((err) => console.log(err))
