const express = require("express");

var app = express();

// var bodyParser = require("body-parser");
// var jsonParser = bodyParser.json();

const axios = require("axios");

const port = 3000;

const nasaImgBaseUrl = "https://images-api.nasa.gov";

// Log url of every request.
app.use("/", (req, res, next) => {
  console.log("req-url: ", req.url);
  next();
});

// Images search.
app.get("/nasaimgsearch", (req, res) => {
  var search = req.query.search;
  var searchDesc = req.query.searchDesc;
  console.log("req.query: ", req.query);
  // @TODO: sanitize search text
  const queryUrl = `${nasaImgBaseUrl}/search?q=${search}&description=${searchDesc}&media_type=image`;
  console.log("nasa api query url: ", queryUrl);
  axios.get(queryUrl).then(axiosRes => {
    const displayData = axiosRes.data.collection.items;
    const imageUrlsList = [];
    displayData.forEach(el => {
      imageUrlsList.push({
        thumbnailLink: el.links[0].href,
        nasaId: el.data[0].nasa_id
      });
    });
    console.log("image urls list: ", imageUrlsList);
    res.send(imageUrlsList);
  });
});

// Public static folder access.
app.use("/", express.static(__dirname + "/public"));

app.listen(port, function() {
  console.log(`Server listening on port ${port}...`);
});
