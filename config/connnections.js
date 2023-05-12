// Import the mysql2 package
const mysql = require('mysql2');
const util = require("util")
// Create a connection to the database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '3Zwukxtm',
    database: 'employees_db'
});

// Connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database succesfully!');
});
connection.query = util.promisify(connection.query)
// Export the connection
module.exports = connection;