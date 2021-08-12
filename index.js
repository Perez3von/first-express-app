console.log('hello world');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./data.js');

app.get('/', (req, res) => {
    res.send('hello world!!!!!!!!!');
});




app.get('/tears', (req, res) => {

    res.json(data);
   

    // res.send(`These are my tears from ${req.query.name}`);
} )


app.get('/tears/:id', (req, res) => {
   
    const teamID = Number(req.params.id);

    const player =  data.find( (item) => (item.id === teamID) );

    res.json(player);
});




app.listen(port, () => {
    console.log(`listieing at port ${port}`);
});


module.exports = app;