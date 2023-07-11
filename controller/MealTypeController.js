const MealTypeModel = require('../model/MealTypeModel')

const MealTypeController = {
  getMealType: async (req, res) => {
    let result = await MealTypeModel.find({})
    res.send({ status: true, result })
  },
}

module.exports = MealTypeController
