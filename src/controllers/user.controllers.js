const { UserService } = require("../services");

class UserController {
  getUsers = async (req, res) => {
    const users = await UserService.getUsers();
    return res.send(users);
  };
}

module.exports = {
  UserController: new UserController(),
};
