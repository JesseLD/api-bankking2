import { Sequelize } from "sequelize";
import config from "../../Config/config";
import mysql from "mysql2/promise";


const sequelize = new Sequelize(
  config.mysql_db,
  config.mysql_user,
  config.mysql_pass,
  {
    port: config.mysql_port as number,
    dialect: "mysql",
  }
);

async function createDatabase(){
  const connection = mysql.createConnection({
    host: config.mysql_host,
    user: config.mysql_user,
    password: config.mysql_pass,
  });

  (await connection).query("CREATE DATABASE IF NOT EXISTS " + config.mysql_db);

  (await connection).end()

  console.log("Migrations finished");
}

createDatabase()
  .then(() => {
    console.log("Database created successfully");
  })
  .catch((error) => {
    console.error("Error creating database:", error);
  });

export default sequelize;