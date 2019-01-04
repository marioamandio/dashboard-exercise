const databaseConfig = {}

if(process.env.NODE_ENV === 'production') {

    databaseConfig.host = 'us-cdbr-iron-east-01.cleardb.net';
    databaseConfig.user = 'b63208a7b9abad:892a279d';
    databaseConfig.password = '892a279d';
    databaseConfig.database = 'heroku_e3178021a2fd2ac';

} else {
    databaseConfig.host = 'localhost';
    databaseConfig.user = 'root';
    databaseConfig.password = 'password';
    databaseConfig.database = 'sains';
}

module.exports = databaseConfig;