const express = require("express");
var app = express();
const port = 3000;
const nasaApi = require("./nasa-api");

// Log request url
app.use("/", (req, res, next) => {
  console.log("req-url: ", req.url);
  next();
});

// Images search
app.get("/nasaimgsearch", (req, res) => {
  var search = req.query.search;
  var searchDesc = req.query.searchDesc;
  nasaApi.getImages(search, searchDesc).then(result => {
    res.send(result);
  });
});

// Public static assets
app.use("/", express.static(__dirname + "/dist"));

// Start server
app.listen(port, function() {
  console.log(`Server listening on port ${port}...`);
});
