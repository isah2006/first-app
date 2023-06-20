const express = require('express');
const app = express();

app.get('/', (req,res) => {
   res.send('Hello World');
});

app.get('/getUser', (req,res) => {
   res.send({
      username: "Adamu tako",
      mobileNumber: 90877886
   });
});


app.listen(3000, () => console.log('listenning on port 3000...'));