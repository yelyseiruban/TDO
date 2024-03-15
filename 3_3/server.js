const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

const dbUrl = process.env.MONGO_DB_URL;
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const itemSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model('Item', itemSchema);

Item.create({ name: 'Example Item' }, (err, result) => {
  if (err) {
    console.error('Error inserting item:', err);
  } else {
    console.log('Item inserted successfully:', result);
  }
});

app.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log("App listening at http://localhost:${port}");
});