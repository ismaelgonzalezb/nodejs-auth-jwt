if (process.env["NODE_ENV"] !== "production") {
  require("dotenv").config();
}

class Configuration {
  static get(key) {
    if (!process.env[key]) {
      console.log(`Missing variable: ${key}`);
      process.exit(1);
    }

    return process.env[key];
  }
}

module.exports = {
  Configuration,
};
