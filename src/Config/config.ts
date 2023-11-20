import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const MYSQL_DB = process.env.MYSQL_DB || "jldnw_bankking";
const MYSQL_USER = process.env.MYSQL_USER || "root";
const MYSQL_PASS = process.env.MYSQL_PASS || "9090";
const MYSQL_HOST = process.env.MYSQL_HOST || "localhost";
const MYSQL_PORT = parseInt(process.env.MYSQL_PORT as string) || 3306;

const config = {
  port: PORT,
  mysql_db: MYSQL_DB,
  mysql_user: MYSQL_USER,
  mysql_pass: MYSQL_PASS,
  mysql_host: MYSQL_HOST,
  mysql_port: MYSQL_PORT,
};

export default config;
