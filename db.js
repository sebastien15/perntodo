const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgress",
    password: "seba",
    host: 5432,
    database: "perntodo"
});

module.exports = pool;