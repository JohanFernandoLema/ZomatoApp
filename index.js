const express = require('express')
const app = express()
const mongoose = require('mongoose')
const AppRouter = require('./routes/AppRoutes')
const PORT = 3000

app.use('/api', AppRouter)
// AppRouter.get('/get-user-list',)
const MONGO_DB_URI =
  ' mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1'

// mongoose
//   .connect(MONGO_DB_URI)
//   .then(() => {})
//   .catch((err) => console.log(err))
app.listen(PORT, () => {
  console.log('We are on;')
})
