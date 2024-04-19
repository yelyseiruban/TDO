const express = require('express');
const { Pool } = require('pg');
const app = express();
const pool = new Pool({ connectionString: 'postgres://user:password@db:5432/carsdb' });

app.use(express.json());

app.get('/cars', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM car');
    res.json(rows);
});

app.post('/addCar', async (req, res) => {
    const { model, year, details } = req.body;
    await pool.query('INSERT INTO car (model, year, details) VALUES ($1, $2, $3)', [model, year, details]);
    res.status(201).send('Car added');
});

const port = 3000;
app.listen(port, () => console.log(`Express app listening on port ${port}`));