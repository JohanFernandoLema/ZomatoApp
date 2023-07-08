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
  saveUserData: async (req, res) => {
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
    // use insert one to add our data inside the db file
    let newUser = new UserModel(saveData)
    let result = await newUser.save()
    res.send({ status: true, result })
  },
  userLogin: async (req, res) => {
    res.send({ status: true, message: 'Enter your data' })
  },
}

module.exports = UserController
