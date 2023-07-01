const express = require('express')
const app = express()
const AppRouter = require('./routes/AppRoutes')
const PORT = 3000

AppRouter.get('/', AppRouter)

app.listen(PORT, () => {
  console.log('We are on;')
})
