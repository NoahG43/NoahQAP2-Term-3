// modules required for web server to run

const http = require("http");

// accessing functions in routes.js file

const routes = require("./routes.js");

// creating server and requesting url
// writing the status code and the type of text to display

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  let path = "./views";
  // switch statement for accessing any specified url
  // default case at the bottom if the url is not found
  // breaks to exit switch statement

  switch (req.url) {
    case "/":
      path += "/index.html";
      console.log("root");
      routes.indexRoute(path, res);
      break;
    case "/about":
      path += "/about.html";
      console.log("/about");
      routes.aboutRoute(path, res);
      break;
    case "/contact":
      path += "/contact.html";
      console.log("/contact");
      routes.contactRoute(path, res);
      break;
    case "/product":
      path += "/product.html";
      console.log("/product");
      routes.productRoute(path, res);
      break;
    case "/subscribe":
      path += "/subscribe.html";
      console.log("/subscribe");
      routes.subscribeRoute(path, res);
      break;
    case "/magic":
      path += "/magic.html";
      console.log("/magic");
      routes.magicRoute(path, res);
      break;
    case "/pumpkin":
      path += "/pumpkin.html";
      console.log("/pumpkin");
      routes.pumpkinRoute(path, res);
      break;
    default:
      path += "/404.html";
      console.log("default");
      routes.fourRoute(path, res);
      break;
  }
});

// server listening on port 3000
// logging a message to see if it works

server.listen(3000, "localhost", () => {
  console.log("your server works. dont mess it up");
});
