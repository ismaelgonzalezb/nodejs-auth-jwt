const bcrypt = require("bcrypt");

const { createJWT, validateJwt } = require("../middlewares");
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
    const user = await UserRepository.findOne({ username });

    if (!user) {
      const error = new Error();
      error.message = `User not found!`;
      error.status = 404;
      throw error;
    }

    if (!password) {
      const error = new Error();
      error.message = `Password missing!`;
      error.status = 404;
      throw error;
    }

    const isValidPassword = bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      const error = new Error();
      error.message = "Invalid credentials";
      error.status = 401;

      throw error;
    }

    const accessToken = createJWT(user._id);

    return { accessToken };
  };

  getUsers = async () => {
    const users = await UserRepository.find();

    return users;
  };
}

module.exports = {
  UserService: new UserService(),
};
