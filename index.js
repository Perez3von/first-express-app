console.log('hello world');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello world!!!!!!!!!')
});

app.get('/tears', (req, res) => {

    res.send(`These are my tears from ${req.query.name}`);
} )

app.listen(port, () => {
    console.log(`listieing at port ${port}`)
});