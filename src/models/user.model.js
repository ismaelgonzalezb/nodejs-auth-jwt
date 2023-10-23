const { Schema } = require("mongoose");

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  department: {
    type: String,
  },
});

module.exports = {
  UserSchema,
};
