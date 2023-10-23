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

    await UserRepository.create({ username, password, department });

    return {
      username,
      password,
      department,
    };
  };

  getUsers = async () => {
    const users = await UserRepository.find();

    return users;
  };
}

module.exports = {
  UserService: new UserService(),
};
