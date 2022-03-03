const mysql = require('mysql');
const dbCredentials = {
    host: "localhost",
    user: "root",
    password: "rghk1999",
    database: "udemy"
}
const dbConnection = mysql.createConnection(dbCredentials);
dbConnection.connect(err => {
    if(err) {
        throw err;
    }
})

module.exports = dbConnection;