const LocationModel = require('../model/LocationModel')

const LocationController = {
  getLocationList: async (req, res) => {
    let result = await LocationModel.find({})
    res.send({ status: true, result })
  },
}

module.exports = LocationController
