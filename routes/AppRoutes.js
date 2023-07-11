const AppRouter = require('express').Router()

const UserController = require('../controller/UserController')

const LocationController = require('../controller/LocationController')
const RestaurantController = require('../controller/RestaurantController')
const MealTypeController = require('../controller/MealTypeController')

AppRouter.get('/', UserController.userHome)

AppRouter.get('/get-user-list/:gender', UserController.getUserList)

AppRouter.get('/get-location-list', LocationController.getLocationList)
AppRouter.get(
  '/get-location-by-loc/:loc_id',
  RestaurantController.getRestaurantListByLoc
)
AppRouter.get(
  '/get-restaurant-details/:rest_id',
  RestaurantController.getSingleRestaurantDetails
)

AppRouter.get('/get-meal-type-list', MealTypeController.getMealType)

AppRouter.post('/save-user-data', UserController.saveUserData)
AppRouter.post('/login', UserController.userLogin)

module.exports = AppRouter
