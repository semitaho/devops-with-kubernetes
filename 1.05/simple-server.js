const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("<h1>Hello Kuberneettes!</h1>");
};
const server = http.createServer(requestListener);
const port = process.env.PORT || 8009;
server.listen(port, () => {
    console.log(`Server is running on  port ${port}`);
});
