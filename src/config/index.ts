import dotenv from 'dotenv';

dotenv.config();

const {
    APPPORT,
    DBSERVER,
    DBNAME,
    DBPORT,
    DBUSER,
    DBPASSWORD
} = process.env;

export default {
    port : APPPORT,
    dbUser : DBUSER,
    dbPassword : DBPASSWORD,
    dbServer : DBSERVER,
    dbName : DBNAME,
    dbPort : Number(DBPORT)
}