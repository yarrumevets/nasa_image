const axios = require("axios");
const nasaImgBaseUrl = "https://images-api.nasa.gov";

module.exports = {
  getImages: (search, searchDesc) => {
    const descParam = searchDesc ? `&description=${searchDesc}` : "";
    const queryUrl = `${nasaImgBaseUrl}/search?q=${search}${descParam}&media_type=image`;
    return axios.get(queryUrl).then(axiosRes => {
      const items = axiosRes.data.collection.items;
      const imageUrlsList = [];
      items.forEach(el => {
        imageUrlsList.push(el.links[0].href);
      });
      return imageUrlsList;
    });
  }
};
