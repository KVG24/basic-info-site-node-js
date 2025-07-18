// Pure Node implementation

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//     let filePath;

//     if (req.url == "/") {
//         filePath = "/index.html";
//     } else if (req.url == "/about") {
//         filePath = "/about.html";
//     } else if (req.url == "/contact-me") {
//         filePath = "/contact-me.html";
//     } else {
//         filePath = "404.html";
//     }

//     const finalPath = path.join(__dirname, filePath);

//     fs.readFile(finalPath, (err, content) => {
//         if (err) {
//             res.writeHead(404, { "Content-Type": "text/html" });
//             res.end("404");
//         } else {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(content);
//         }
//     });
// });

// server.listen(8080, () => {
//     console.log(`Server running at http://localhost:8080/`);
// });

// -----------------------------------------------------------------

// Express implementation

const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/about", (req, res) =>
    res.sendFile(path.join(__dirname, "about.html"))
);
app.get("/contact-me", (req, res) =>
    res.sendFile(path.join(__dirname, "contact-me.html"))
);
app.use((req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, "404.html"));
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
