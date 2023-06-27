const express = require('express');

const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())

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

// Endpoint for user registration
app.post('/login', (req, res) => {
   const { username, password } = req.body;
 
   // Validate username and password
   if (username === 'isah20064u@gmail.com' && password === '12345678') {
   //  return res.status(200).send('Login successful!');
     res.status(200).send('Login successful!');
   } else {
     res.status(400).send('Invalid login credentials');
   }
   
   // Perform additional validation if needed
 
   // Registration successful
   // res.json({ message: 'Registration successful' });
 });

app.listen(3000, () => console.log('listenning on port 3000...'));