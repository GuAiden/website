const Pool = require("pg").Pool; 
const pool = new Pool({
    user: "aidengu", 
    password: "123", 
    host: "localhost",
    port: "5432",
    database: "pernpost"
});

module.exports = pool; 
