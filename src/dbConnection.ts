import { DataSource } from "typeorm"
import config from "./config"

export const AppDataSource = new DataSource({
    type : "mysql",
    host : config.dbServer,
    username : config.dbUser,
    password : config.dbPassword,
    database : config.dbName,
    synchronize : true,
    entities : ["src/entities/**/index.ts"],
    subscribers : [],
})