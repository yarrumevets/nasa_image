const axios = {
  get: url => {
    return new Promise((resolve, reject) => {
      const nasaApiUrl = `https://images-api.nasa.gov/search`;
      const localApiUrl = `/nasaimgsearch`;
      const urlRoot = url.split("?")[0];
      if (urlRoot === nasaApiUrl)
        resolve({
          data: {
            collection: {
              items: [
                {
                  links: [
                    {
                      href: "e.t.jpg"
                    }
                  ],
                  data: [
                    {
                      nasa_id: "123"
                    }
                  ]
                },
                {
                  links: [
                    {
                      href: "alf.jpg"
                    }
                  ],
                  data: [
                    {
                      nasa_id: "456"
                    }
                  ]
                }
              ]
            }
          }
        });
      else if (urlRoot === localApiUrl)
        resolve({
          data: ["moon.jpg", "sun.jpg"]
        });
    });
  }
};

module.exports = axios;
