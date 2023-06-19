
const http = require("http");

const Server = http.createServer((req, res) => { if (req.url === '/') 
res.write('id:1, name: "full name", age:21, date joined: 2023-06-15');
res.end();

 if (req.url === '/users'){
  res.write(JSON.stringify(['id:1, name: "full name", age:21, date joined: 2023-06-15']))}
});
Server.listen(3310);
console.log('Listening on port 3310...');

              


  
