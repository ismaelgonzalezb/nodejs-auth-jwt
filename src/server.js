const express = require("express");

const { appRoute } = require("./routes");
const { NotFoundMiddleware, ErrorHandlerMiddleware } = require("./middlewares");

const server = express();

server.use(express.json());

server.use("/v1/api", appRoute);

server.use(NotFoundMiddleware);

server.use(ErrorHandlerMiddleware);

module.exports = {
  server,
};
