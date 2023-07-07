const UserModel = require('../model/UserModel')

const UserController = {
  userHome: (req, res) => {
    res.send({
      status: true,
      message: 'welcome to home',
    })
  },
  getUserList: async (req, res) => {
    let { gender } = req.params
    let result = await UserModel.find(
      { gender: { $regex: gender, $options: 'i' } },
      { first_name: 1, last_name: 1, email: 1 }
    )
    res.send({
      status: true,
      list: result,
    })
  },
  saveUserData: (req, res) => {
    // client info will be sent to server
    let user = req.body
    let saveData = {
      f_name: user.f_name,
      l_name: user.l_name,
      gender: user.gender,
      email: user.email,
      mobile: user.mobile,
      password: user.password,
    }
    res.send({ status: true, data_obtained: user })
  },
}

module.exports = UserController
