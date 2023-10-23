const { Router } = require("express");
const { UserController } = require("../controllers");

const appRoute = Router();

appRoute.post("/register", UserController.register);
appRoute.post("/login", UserController.login);
appRoute.get("/", UserController.getUsers);

module.exports = {
  appRoute,
};
