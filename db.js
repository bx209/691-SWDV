const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "691swdv",
    host: "localhost",
    port: 3000,
    database: "shadow"
});

module.exports = pool;