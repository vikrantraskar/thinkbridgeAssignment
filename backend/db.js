const mysql = require('mysql')

const pool = mysql.createPool({
    host : 'localhost',
    user:"root",
    password:'root',
    database : 'thinkbridge_db',
    port:3306,
    connectionLimit:20
})

module.exports = {
    pool
}