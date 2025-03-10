'use strict'

const express = require('express');
// Constants
const PORT = 8080;

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
})

app.listen(PORT, () => {
    console.log(`Running on => http://${`localhost`}:${PORT}`);
})