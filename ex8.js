// Exercise 8: Respond Based on Headers and Method
// If the method is POST
// and the Content-Type header is application/json
//   -> answer "JSON accepted"
// Otherwise -> answer "Unsupported request"
// Hint: req.method === 'POST'
//       req.headers['content-type'] === 'application/json'
//
// Run: node ex8.js   (test it with Postman / Thunder Client)

const http = require("http");

// write your code here
const server = http.createServer((req, res) => {
  const isPost = req.method === 'POST';
  const isJson = req.headers['content-type'] === 'application/json';

  if (isPost && isJson) {
    res.end("JSON accepted");
  } else {
    res.end("Unsupported request");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});