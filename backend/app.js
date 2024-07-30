require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const util = require('util'); // Import util module
const app = express();
const port = 3000;

// MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Promisify pool.query
pool.query = util.promisify(pool.query); // Promisify query
pool.getConnection = util.promisify(pool.getConnection); // Promisify getConnection

app.get('/', async (req, res) => {
  try {
    const results = await pool.query('SELECT 1 + 1 AS solution');
    res.send(`The solution is: ${results[0].solution}`);
  } catch (error) {
    res.status(500).send('Database connection failed: ' + error.message);
  }
});

app.get('/test-db', async (req, res) => {
  try {
    const results = await pool.query('SELECT name, email FROM users'); // Adjust table name
    res.json(results); // Send results as JSON response
  } catch (error) {
    res.status(500).send('Database connection failed: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
