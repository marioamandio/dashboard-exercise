const databaseConfig = {}

if(process.env.NODE_ENV === 'production') {

    databaseConfig.host = process.env.DATABASE_HOST;
    databaseConfig.user = process.env.DATABASE_USER;
    databaseConfig.password = process.env.DATABASE_PASSWORD
    databaseConfig.database = process.env.DATABASE_DATABASE;

} else {
    databaseConfig.host = 'localhost';
    databaseConfig.user = 'root';
    databaseConfig.password = 'password';
    databaseConfig.database = 'sains';
}

module.exports = databaseConfig;