const express = require("express");
const app = express();

const { Pool } = require("pg");
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Application listening at 0.0.0.0:3000");
});

app.use(express.json());

app.get("/data", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM example;");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/data/average", async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query(
            "SELECT AVG(integer_field) as average FROM example"
        );
        const average = parseFloat(result.rows[0].average);
        res.json({ average });
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching data from database");
    }
});

app.post("/data", async (req, res) => {
    try {
        const { text_field, integer_field } = req.body;
        const query =
            "INSERT INTO example (text_field, integer_field) VALUES ($1, $2) RETURNING *";
        const values = [text_field, integer_field];
        const result = await pool.query(query, values);
        res.json({ message: "Data inserted successfully", data: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.delete("/data/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const query = "DELETE FROM example WHERE id = $1 RETURNING *";
        const values = [id];
        const result = await pool.query(query, values);
        if (result.rowCount === 0) {
            return res
                .status(404)
                .json({ message: "Data with the specified ID not found" });
        }
        res.json({
            message: "Data deleted successfully",
            deletedData: result.rows[0],
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});