const express = require('express');
const app = express();

app.get('/', (req,res) => {
   res.send('Hello World');
});

app.get('/what', (req,res) => {
   res.send('What is your name?');
});

app.listen(3000, () => console.log('listenning on port 3000...'));