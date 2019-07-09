const dotenv = require("dotenv");
dotenv.config();

const databaseConfig = {};

if (process.env.NODE_ENV === "production") {
  databaseConfig.host = process.env.DATABASE_HOST;
  databaseConfig.user = process.env.DATABASE_USER;
  databaseConfig.password = process.env.DATABASE_PASSWORD;
  databaseConfig.database = process.env.DATABASE_DATABASE;
} else {
  console.log(process.env);
  databaseConfig.host = process.env.DATABASE_HOST;
  databaseConfig.user = process.env.DATABASE_USER;
  databaseConfig.password = process.env.DATABASE_PASSWORD;
  databaseConfig.database = process.env.DATABASE_DATABASE;
}

module.exports = databaseConfig;
