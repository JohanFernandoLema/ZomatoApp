const AppRouter = require('express').Router()

const UserController = require('../controller/UserController')

AppRouter.get('/', UserController.userHome)

module.exports = AppRouter
