const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  const currentTime = new Date();
  res.json({ time: currentTime });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});