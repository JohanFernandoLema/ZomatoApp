const express = require('express')
const app = express()
const mongoose = require('mongoose')
const AppRouter = require('./routes/AppRoutes')
const PORT = 3000

AppRouter.get('/', AppRouter)
const MONGO_DB_URI =
  ' mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1'

mongoose
  .connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log('We are on;')
    })
  })
  .catch((err) => console.log(err))
