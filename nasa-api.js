const axios = require("axios");
const nasaImgBaseUrl = "https://images-api.nasa.gov";

module.exports = {
  getImages: (search, searchDesc) => {
    const descParam = searchDesc ? `&description=${searchDesc}` : "";
    const queryUrl = `${nasaImgBaseUrl}/search?q=${search}${descParam}&media_type=image`;
    return this.axios.get(queryUrl).then(axiosRes => {
      const displayData = axiosRes.data.collection.items;
      const imageUrlsList = [];
      displayData.forEach(el => {
        imageUrlsList.push({
          thumbnailLink: el.links[0].href,
          nasaId: el.data[0].nasa_id
        });
      });
      return imageUrlsList;
    });
    return ["foo"];
  }
};
