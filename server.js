import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const fileName = fileURLToPath(import.meta.url);
const folderName = path.dirname(fileName);


const PORT = 3000;


function sendFile(response, filePath, type = "text/html", status = 200) {
  fs.readFile(filePath, function (error, data) {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("Server Error");
    } else {
      response.writeHead(status, { "Content-Type": type });
      response.end(data);
    }
  });
}


const server = http.createServer(function (request, response) {
  const url = request.url;

  
  if (url === "/styles/style.css") {
    sendFile(
      response,
      path.join(folderName, "styles", "style.css"),
      "text/css"
    );
  }


  else if (url.startsWith("/images/")) {
    const imgPath = path.join(folderName, url);
    const extension = path.extname(imgPath);

    let imgType = "image/jpeg";
    if (extension === ".png") imgType = "image/png";
    if (extension === ".jpg") imgType = "image/jpeg";

    sendFile(response, imgPath, imgType);
  }

  
  else if (url === "/" || url === "/home") {
    sendFile(response, path.join(folderName, "pages", "home.html"));
  }

  
  else if (url === "/about") {
    sendFile(response, path.join(folderName, "pages", "about.html"));
  }

  
  else if (url === "/contact") {
    sendFile(response, path.join(folderName, "pages", "contact.html"));
  }

  
  else if (url === "/favicon.ico") {
    response.writeHead(204);
    response.end();
  }

  
  else {
    sendFile(
      response,
      path.join(folderName, "pages", "404.html"),
      "text/html",
      404
    );
  }
});


server.listen(PORT, function () {
  console.log("Server started on http://localhost:" + PORT);
});
