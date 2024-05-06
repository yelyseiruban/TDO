const express = require('express');
const app = express();

const { Pool } = require('pg');
const pool = new Pool({
    user: 'dbuser',
    host: process.env.DB_HOST || 'localhost',
    database: 'sample-db',
    password: 'secretpassword',
    port: process.env.DB_PORT || 5432,
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Application listening at 0.0.0.0:3000');
});

app.get('/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM sample_table;');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/data/average', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT AVG(integer_field) as average FROM sample_table');
        const average = parseFloat(result.rows[0].average);
        res.json({ average });
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching data from database');
    }
});

app.get('/data/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM sample_table WHERE id = $1', [id]);
        res.json(result.rows);
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching data from database');
    }
});



