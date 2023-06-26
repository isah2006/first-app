const express = require('express');
const app = express();
const port = 3000;

// Define a route for handling login requests
app.post('/login', (req, res) => {
  // Add your login validation logic here
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match
  if (username === 'isah20064u@gmail.com' && password === '12345678') {
    res.status(200).send('Login successful!');
  } else {
    res.status(400).send('Invalid login credentials');
  }
});
