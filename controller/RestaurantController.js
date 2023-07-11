const LocationModel = require('../model/LocationModel')
const RestaurantModel = require('../model/RestaurantModel')

const RestaurantController = {
  getRestaurantListByLoc: async (req, res) => {
    let { loc_id } = req.params
    let result = await RestaurantModel.find({ location_id: loc_id })
    res.send({ status: true, result })
  },
  // getSingleRestaurantDetail: async (req, res) => {
  //   let result = await RestaurantModel.findOne()
  //   res.send({ status: true, result })
  // },
}

module.exports = RestaurantController
