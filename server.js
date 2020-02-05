const express = require("express");
const nasaApi = require("./nasa-api");

var app = express();
const port = 4321;

// Show visits in console.
app.use((req, res, next) => {
  console.log(
    `Nasa params: ${req.params}`
  );
  next();
});

// Images search.
app.get("/nasaimgsearch", (req, res) => {
  var search = req.query.search;
  var searchDesc = req.query.searchDesc;
  nasaApi.getImages(search, searchDesc).then(result => {
    res.send(result);
  });
});

// Public static files.
app.use("/", express.static(__dirname + "/dist"));

// Start server.
app.listen(port, function() {
  console.log(`Server listening on port ${port}...`);
});
