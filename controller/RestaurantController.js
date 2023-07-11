const RestaurantModel = require('../model/RestaurantModel')

const RestaurantController = {
  // get restaurant by its location id
  getRestaurantListByLoc: async (req, res) => {
    let { loc_id } = req.params
    let result = await RestaurantModel.find(
      { location_id: loc_id },
      //Sort elements to be found only by the below mentioned parameters
      { name: 1, locality: 1, image: 1, city: 1 }
    )
    res.send({ status: true, result })
  },
  // Get restaurant by its id
  getSingleRestaurantDetails: async (req, res) => {
    let { rest_id } = req.params
    let result = await RestaurantModel.findOne({ _id: rest_id })
    res.send({ status: true, result })
  },
  //Get all restaurant list
  filter: async (req, res) => {
    let result = await RestaurantModel.find()
    res.send({ status: true, result })
  },
}

module.exports = RestaurantController
