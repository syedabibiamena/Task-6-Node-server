import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const currentFile = fileURLToPath(import.meta.url);
const currentFolder = path.dirname(currentFile);
const PORT = 3000;
function readAndSend(res, filePath, contentType, statusCode) {
  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
    } else {
      res.writeHead(statusCode, { "Content-Type": contentType });
      res.end(data);
    }
  });
}

/* create server */
const server = http.createServer(function (req, res) {
  const reqUrl = req.url;


  if (reqUrl === "/styles/style.css") {
    readAndSend(
      res,
      path.join(currentFolder, "styles", "style.css"),
      "text/css",
      200
    );
  }

  else if (reqUrl.startsWith("/images/")) {
    const imagePath = path.join(currentFolder, reqUrl);
    const ext = path.extname(imagePath);

    let imageType = "image/jpeg";
    if (ext === ".png") {
      imageType = "image/png";
    }

    readAndSend(res, imagePath, imageType, 200);
  }
  else if (reqUrl === "/" || reqUrl === "/home") {
    readAndSend(
      res,
      path.join(currentFolder, "pages", "home.html"),
      "text/html",
      200
    );
  }
  else if (reqUrl === "/about") {
    readAndSend(
      res,
      path.join(currentFolder, "pages", "about.html"),
      "text/html",
      200
    );
  }
  else if (reqUrl === "/contact") {
    readAndSend(
      res,
      path.join(currentFolder, "pages", "contact.html"),
      "text/html",
      200
    );
  }
  else if (reqUrl === "/favicon.ico") {
    res.writeHead(204);
    res.end();
  }
  else {
    readAndSend(
      res,
      path.join(currentFolder, "pages", "404.html"),
      "text/html",
      404
    );
  }
});
server.listen(PORT, function () {
  console.log("Server running at http://localhost:" + PORT);
});
