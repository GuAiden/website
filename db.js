const Pool = require("pg").Pool; 
const pool = new Pool({
    user: "postgres", 
    password: "CliffRD24", 
    host: "localhost",
    port: "5432",
    database: "post"
});

module.exports = pool; 