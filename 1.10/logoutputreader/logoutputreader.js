

const http = require("http");
const fs = require('fs');
const FILE_PATH = "/log/file.txt";
const requestListener = function (req, res) {
  
      if (!fs.existsSync(FILE_PATH)) {
        res.writeHead(200);
        res.end("Hyvästi!");
        return;
      }
      const fileContents = fs.readFileSync(FILE_PATH);
      res.writeHead(200);
      res.end(fileContents);
};
const server = http.createServer(requestListener);
const port = process.env.PORT || 7001;
server.listen(port, () => {
    console.log(`Server is running on  port ${port}`);
});