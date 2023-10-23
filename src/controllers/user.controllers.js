const { UserService } = require("../services");

class UserController {
  register = async (req, res) => {
    const { body } = req;
    const userRegistered = await UserService.register(body);
    return res.status(201).json(userRegistered);
  };

  login = async (req, res) => {
    const { body } = req;
    const userRegistered = await UserService.login(body);
    return res.status(201).json(userRegistered);
  };

  getUsers = async (req, res) => {
    const users = await UserService.getUsers();
    return res.send(users);
  };
}

module.exports = {
  UserController: new UserController(),
};
