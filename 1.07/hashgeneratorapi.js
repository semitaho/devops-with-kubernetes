
const http = require("http");

let currentString = null;
setInterval(() => {
  var crypto = require("crypto");
  var id = crypto.randomBytes(20).toString('hex');
  currentString = new Date().toISOString()+": "+id;
  console.log(currentString);
}, 5000);




const requestListener = function (req, res) {

  switch(req.url) {
    case "/hash":
      res.writeHead(200);
      res.end(currentString);
      break;
    default:
      res.writeHead(200);
      res.end("My first server!");

  }
  
};
const server = http.createServer(requestListener);
const port = process.env.PORT || 7001;
server.listen(port, () => {
    console.log(`Server is running on  port ${port}`);
});
