Assignment 6 – Simple Web Server using Node.js

 Objective
To create a basic web server using Node.js that handles multiple routes and serves HTML pages using the built-in `http` module.

Technologies Used
- Node.js
- JavaScript
- HTML
- CSS

Project Structure
project/
│
├── server.js
├── pages/
│ ├── home.html
│ ├── about.html
│ ├── contact.html
│ └── 404.html
│
├── styles/
│ └── style.css
│
└── images/
└── (jpg images)


How the Server Works (Brief Explanation)

The server is created using Node.js’s built-in `http` module and listens on port **3000**. When a request is received, the server checks the requested URL and serves the corresponding file.

Different routes such as `/home`, `/about`, and `/contact` are handled by serving their respective HTML pages from the `pages` folder. Static files like CSS and images are also served by checking the request path and sending the correct content type.

The server uses **asynchronous file handling** with `fs.readFile()` to ensure non-blocking execution. A reusable helper function is used to serve files, making the code modular and easier to maintain. If an invalid route is requested, a custom **404 page** is displayed with the appropriate HTTP status code.

 How to Run the Project
1. Make sure Node.js is installed
2. Open terminal in the project folder
3. Run the command:
node server.js

4. Open a browser and visit:
- http://localhost:3000/home
- http://localhost:3000/about
- http://localhost:3000/contact

 Features
- Multiple route handling
- Asynchronous file reading
- Modular server code
- Custom 404 error page
- CSS styling and image support
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f6e0b846-1886-42c1-9b38-12e2370eef93" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/39844885-b167-4bf8-9d82-7464051aa492" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b4efa4ed-4821-4a77-9991-8725bc3adb80" />
- <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6eb6dad4-a13f-447d-9129-f71f9d165d77" />










