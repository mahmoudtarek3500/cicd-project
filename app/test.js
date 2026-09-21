const http = require("http");
const assert = require("assert");

const server = require("./server");

http.get("http://localhost:3000", (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(data, "CI/CD Deployment v3. is Working!\n");

    console.log("Test Passed!");
    server.close();
  });
});