const express = require("express");
const { appRoute } = require("./routes");

const server = express();

server.use(express.json());

server.use("/v1/api", appRoute);

module.exports = {
  server,
};
