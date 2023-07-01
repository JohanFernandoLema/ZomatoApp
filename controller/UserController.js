const UserController = {
  userHome: (req, res) => {
    res.send({
      status: true,
      message: 'welcome to home',
    })
  },
}

module.exports = UserController
