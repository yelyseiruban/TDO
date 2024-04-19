const express = require('express');
const app = express();
const PORT = 3000;

const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'database',
    database: 'mydatabase',
    password: 'example',
    port: 5432,
});

app.get('/', async (req, res) => {
    try {
        const dbResponse = await pool.query('SELECT NOW()');
        res.send(`Backend is running. Database time: ${dbResponse.rows[0].now}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error while connecting to database');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});