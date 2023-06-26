
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint for user registration
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Validate username and password
  if (!username || !password) {
    return res.status(400).json({ error: 'invalid login credentials' });
  }
  
  // Perform additional validation if needed

  // Registration successful
  res.json({ message: 'Registration successful' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});