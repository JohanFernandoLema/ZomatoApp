const RestaurantModel = require('../model/RestaurantModel')

const RestaurantController = {
  getRestaurantListByLoc: async (req, res) => {
    let { loc_id } = req.params
    let result = await RestaurantModel.find(
      { location_id: loc_id },
      //Sort elements to be found only by the below mentioned parameters
      { name: 1, locality: 1, image: 1, city: 1 }
    )
    res.send({ status: true, result })
  },
}

module.exports = RestaurantController
