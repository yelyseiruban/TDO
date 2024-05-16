const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Witaj w Dockerze!');
});

app.listen(port, () => {
    console.log(`Aplikacja uruchomiona na porcie ${port}`);
});