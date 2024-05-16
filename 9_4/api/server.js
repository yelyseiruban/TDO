const express = require('express');
const redis = require('redis');
const { Pool } = require('pg');

const app = express();

// Redis client
const redisClient = redis.createClient({
    host: 'redis',
    port: 6379
});

// PostgreSQL pool
const pool = new Pool({
    user: 'your_username',
    host: 'db',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Example route to add message to Redis
app.post('/message', (req, res) => {
    const message = req.body.message;
    redisClient.set('message', message, (err, reply) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send('Message added to Redis');
        }
    });
});

// Example route to retrieve message from Redis
app.get('/message', (req, res) => {
    redisClient.get('message', (err, reply) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(reply);
        }
    });
});

// Example route to add user to PostgreSQL
app.post('/user', (req, res) => {
    const { name, email } = req.body;
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send('User added to PostgreSQL');
        }
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
