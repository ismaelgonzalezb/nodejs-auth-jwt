const bcrypt = require("bcrypt");
const { UserRepository } = require("../repositories");

class UserService {
  register = async (user) => {
    const { username, password, department } = user;
    const isAnExistingUser = await UserRepository.findOne({ username });

    if (isAnExistingUser) {
      const error = new Error();
      error.message = `User already exist`;
      error.status = 409;
      throw error;
    }

    const hash = await bcrypt.hash(password, 8);

    await UserRepository.create({ username, password: hash, department });

    return {
      username,
      password: hash,
      department,
    };
  };

  login = async ({ username, password }) => {
    const isAnExistingUser = await UserRepository.findOne({ username });
  };

  getUsers = async () => {
    const users = await UserRepository.find();

    return users;
  };
}

module.exports = {
  UserService: new UserService(),
};
