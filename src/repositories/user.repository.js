const mongoose = require("mongoose");
const { UserSchema } = require("../models");

const UserRepository = mongoose.model("Users", UserSchema);

module.exports = {
  UserRepository,
};
