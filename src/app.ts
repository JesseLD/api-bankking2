import express from "./Config/express"
import config from "./Config/config"
import { runMigrations } from "./Api/Services/MysqlService"


const server = express.listen(config.port, ()=>{

  console.log("Server listening on port: ",config.port)
})