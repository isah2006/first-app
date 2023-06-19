const fs = require('fs');

const files = fs.readdirsync('./');

console.log(files);

fs.readdir('./', function(err, file){

});