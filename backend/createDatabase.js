require('dotenv').config({ path: require('path').resolve(__dirname, './.env') });
const mysql = require('mysql2/promise');

async function createDatabase() {
  const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
  await connection.end();
}

createDatabase()
  .then(() => {
    console.log('Database checked/created successfully');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error creating database:', err);
    process.exit(1);
  });