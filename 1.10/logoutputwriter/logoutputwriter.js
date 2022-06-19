
const fs = require('fs');

let currentString = null;
const FILE_PATH = '/log/file.txt';
setInterval(() => {
  var crypto = require("crypto");
  var id = crypto.randomBytes(20).toString('hex');
  currentString = new Date().toISOString()+": "+id;
  fs.writeFile(FILE_PATH, currentString, err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('file saved', FILE_PATH);

    });
}, 5000);




