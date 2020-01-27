const nasaApi = require("../nasa-api");

import * as dependancy from "axios";

dependancy.get = url => {
  return new Promise((resolve, reject) => {
    resolve({
      status: 200,
      statusText: "OK",
      headers: { foo: "bar" },
      config: { foo: "bar" },
      data: {
        collection: {
          href: "https://images-api.nasa.gov/search?q=k&media_type=image",
          metadata: [{}],
          links: [],
          items: [
            {
              href:
                "https://images-assets.nasa.gov/image/KSC-20170818-PH_KAA01_0053/collection.json",
              links: [
                {
                  href:
                    "https://images-assets.nasa.gov/image/PIA14037/PIA14037~thumb.jpg",
                  render: "image",
                  rel: "preview"
                }
              ],
              data: [
                {
                  media_type: "image",
                  secondary_creator: "NASA/GSFC/Arizona State University",
                  date_created: "2011-04-06T21:23:10Z",
                  title: "Crater rim of Flamsteed P",
                  center: "JPL",
                  description_508: "Crater rim of Flamsteed P",
                  description: "Crater rim of Flamsteed P",
                  keywords: ["Moon", "Lunar Reconnaissance Orbiter LRO"],
                  nasa_id: "PIA14037"
                }
              ]
            }
          ],
          version: "1.0"
        }
      }
    });
  });
};

test("nasaApi.getImages takes a search string and description and returns a promise with a list of (urls) strings.", () => {
  //expect.assertions(1);
  return nasaApi.getImages("food", "").then(data => {
    console.log("d a t a : ", data);
    return expect(data[0].thumbnailLink).toEqual(
      "https://images-assets.nasa.gov/image/PIA14037/PIA14037~thumb.jpg"
    );
  });
});
