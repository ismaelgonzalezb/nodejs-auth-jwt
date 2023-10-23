const { Router } = require("express");
const { UserController } = require("../controllers");

const appRoute = Router();

appRoute.get("/", UserController.getUsers);

module.exports = {
  appRoute,
};
