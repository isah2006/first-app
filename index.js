const express = require('express');
const bodyParser = require('body-parser');

const app = express();
bodyParser.urlencoded({extended: false})
app.use(bodyParser.json())

app.get('/', (req,res) => {
   res.send('Hello World');
});
let fruits = [{id:1, fruit:"Orange"},{id:2, fruit:"Pineapple"}, {id:3, fruit:"Apple"}, {id:4, fruit:"Watermelon"}, {id:5,fruit: "Banana"}]

app.get('/getFruits', (req,res) => {
   let responseArray = fruits.filter((fruit) => fruit.id <= 3 )
   res.send(responseArray);
});

app.post('/addUser', (req, res) => {
   const form = req.body
   console.log(form);
   res.send(form);
});


app.listen(3000, () => console.log('listenning on port 3000...'));