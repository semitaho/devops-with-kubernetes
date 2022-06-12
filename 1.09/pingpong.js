
const http = require("http");
let counter = 0;
const requestListener = function (req, res) {
  switch(req.url) {
    case "/pingpong":
      counter += 1;
      res.writeHead(200);
      res.end(`pong ${counter}`);
      break;
    default:
      res.writeHead(200);
      res.end("jes");

  }
  
};
const server = http.createServer(requestListener);
const port = process.env.PORT || 7002;
server.listen(port, () => {
    console.log(`Server is running on  port ${port}`);
});