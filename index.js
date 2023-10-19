const mongoose = require("mongoose");

const { Configuration } = require("./src/config");
require("express-async-errors");
const { server } = require("./src/server");

const MONGO_URI = Configuration.get("MONGO_URI");
const APP_PORT = Configuration.get("APP_PORT");

mongoose
  .connect(MONGO_URI)
  .then(() => {
    server.listen(APP_PORT, () => {
      console.log(`Server running on PORT ${APP_PORT} 🚀`);
    });
  })
  .catch(console.log());
