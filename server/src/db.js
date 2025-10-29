const mysql = require('mysql2/promise');

let pool;

async function initPool(config) {
  if (pool) return pool;
  if (!config) throw new Error('DB config required');
  pool = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    port: config.DB_PORT ? Number(config.DB_PORT) : 3306,
    waitForConnections: true,
    connectionLimit: 10,
  });
  return pool;
}

module.exports = { initPool };
