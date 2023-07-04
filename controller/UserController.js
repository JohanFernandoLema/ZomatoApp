const UserController = {
  userHome: (req, res) => {
    res.send({
      status: true,
      message: 'welcome to home',
    })
  },
  // getUserList: async (req, res) => {
  //   let { gender } = req.params
  //   let result = await UserModel.find(
  //     { gender: { $regex: gender, $options: 'i' } },
  //     { first_name: 1, last_name: 1, email: 1 }
  //   )
  //   res.send({
  //     status: true,
  //     list: result,
  //   })
  // },
  // saveUserData: (req, res) => {
  //   res.send({ status: true, status: 'Working' })
  // },
}

module.exports = UserController
