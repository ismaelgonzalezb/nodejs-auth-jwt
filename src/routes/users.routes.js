const { Router } = require("express");
const { UserController } = require("../controllers");
const { validateJwt } = require("../middlewares");

const appRoute = Router();

appRoute.post("/register", UserController.register);
appRoute.post("/login", UserController.login);
appRoute.get("/", [validateJwt], UserController.getUsers);

module.exports = {
  appRoute,
};
