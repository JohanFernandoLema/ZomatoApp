const AppRouter = require('express').Router()

const UserController = require('../controller/UserController')
const { getLocationList } = require('../controller/LocationController')

AppRouter.get('/', UserController.userHome)

AppRouter.get('/get-user-list/:gender', UserController.getUserList)

// AppRouter.get('/get-location-list', LocationController.getLocationList)

AppRouter.post('/save-user-data', UserController.saveUserData)
AppRouter.post('/login', UserController.userLogin)

module.exports = AppRouter
