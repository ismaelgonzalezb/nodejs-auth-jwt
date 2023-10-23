const { UserRepository } = require("../repositories");

class UserService {
  getUsers = async () => {
    const users = await UserRepository.find();

    return users;
  };
}

module.exports = {
  UserServices: new UserServices(),
};
