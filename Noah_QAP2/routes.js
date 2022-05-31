// filesystem module
// events module

const fs = require("fs");
// defining an event emitter class
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
// initializing new emitter object
const myEmitter = new MyEmitter();

// the event being logged to the console is
// the page you visited as well as the time it was visited

myEmitter.on("route", (level, msg) => {
  const d = new Date();
  console.log(d.toLocaleString() + " * " + level.toUpperCase() + " " + msg);
});

// functions for each page

function indexRoute(path, res) {
  displayFile(path, res);
  myEmitter.emit("route", "information", "home page was visited");
}

function aboutRoute(path, res) {
  displayFile(path, res);
  myEmitter.emit("route", "information", "about page was visited");
}

function contactRoute(path, res) {
  displayFile(path, res);
  myEmitter.emit("route", "information", "contact page was visited");
}

function productRoute(path, res) {
  displayFile(path, res);
  myEmitter.emit("route", "information", "product page was visited");
}

function subscribeRoute(path, res) {
  displayFile(path, res);
  myEmitter.emit("route", "information", "subscribe page was visited");
}

function magicRoute(path, res) {
  displayFile(path, res);
  myEmitter.emit("route", "information", "magic page was visited");
}

function pumpkinRoute(path, res) {
  displayFile(path, res);
  myEmitter.emit("route", "information", "pumpkin page was visited");
}

function fourRoute(path, res) {
  displayFile(path, res);
  myEmitter.emit("route", "error", "page not found");
}

// function to display the files

function displayFile(path, res) {
  fs.readFile(path, function (err, data) {
    // function to catch error

    if (err) {
      console.log(err);
      res.end();

      // if no errors occur write to the file
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
}

// exporting modules

module.exports = {
  indexRoute,
  aboutRoute,
  contactRoute,
  productRoute,
  subscribeRoute,
  magicRoute,
  pumpkinRoute,
  fourRoute,
};
