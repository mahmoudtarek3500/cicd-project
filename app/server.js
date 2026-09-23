const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("CI/CD Deployment v5 is Working Alah Akbar!\n");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
module.exports = server;