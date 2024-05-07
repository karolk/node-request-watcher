const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.method == "POST") {
    var body = "";

    req.on("data", function (data) {
      body += data;
    });

    req.on("end", function () {
      console.log(body)
    });
  }

  res.end("Hello World!");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
