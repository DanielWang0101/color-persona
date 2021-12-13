import fetch from "node-fetch";
import { createApi } from "unsplash-js";
global.fetch = fetch;
import got from "got";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });
//GLOBAL VARIABLES
// IMAGGA
const apiKey = process.env.REACT_APP_IMAGGA_ACCESS_KEY;
const apiSecret = process.env.REACT_APP_IMAGGA_SECRET_KEY;
// const imageUrl =
//   "https://images.unsplash.com/photo-1602188324312-e1cd6383d2fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODI2OTN8MHwxfHNlYXJjaHwzfHxncmFwaGljJTIwYXJ0fGVufDB8fHx8MTYzOTMzMzgxNQ&ixlib=rb-1.2.1&q=80&w=1080";
// const url =
//   "https://api.imagga.com/v2/colors?image_url=" + encodeURIComponent(imageUrl);

//UNSPLASH
const { REACT_APP_UNSPLASH_ACCESS_KEY } = process.env;

const unsplash = createApi({
  accessKey: REACT_APP_UNSPLASH_ACCESS_KEY,
  // apiUrl: "http://localhost:8000/unsplash-proxy",
});

// (async () => {
//   try {
//     const response = await got(url, { username: apiKey, password: apiSecret });
//     console.log(JSON.parse(response.body));
//   } catch (error) {
//     console.log(error.response.body);
//   }
// })();

//RESULT from Imagga
// {
//     result: {
//       colors: {
//         background_colors: [Array],
//         color_percent_threshold: 1.75,
//         color_variance: 31,
//         foreground_colors: [Array],
//         image_colors: [Array],
//         object_percentage: 0.00472411187365651
//       }
//     },
//     status: { text: '', type: 'success' }
//   }
// RESULT from unsplash

export const getImages = async (req, res) => {
  try {
    const resp = await unsplash.search.getPhotos({
      query: "graphic art",
      page: 1,
      perPage: 5,
      // color: 'green',
      // orientation: 'portrait',
    });
    const feed = resp.response;
    // extract total and results array from response
    const { total, results } = feed;
    const images = results.map((result) => {
      return result.urls.regular;
    });

    const imagesThumbs = results.map((result) => {
      return result.urls.thumb;
    });

    // let contentEnriched = { colors: [], thumb: "" };
    let contentEnriched = [];

    for (let i = 0; i < images.length; i++) {
      let output = { colors: [], thumb: "", regular: "" };
      let imageUrl = images[i];
      let thumbnails = imagesThumbs[i];
      let url =
        "https://api.imagga.com/v2/colors?image_url=" +
        encodeURIComponent(thumbnails);
      let response = await got(url, {
        username: apiKey,
        password: apiSecret,
      });

      let resu = JSON.parse(response.body).result.colors;

      let bg = resu.background_colors;
      //   let fo = res.foreground_colors;
      let randomNum = Math.floor(Math.random() * 3);
      let bgColor = bg[randomNum].closest_palette_color_html_code;
      //   let foColor = fo[randomNum].closest_palette_color_html_code;
      // output.colors.push(bgColor, foColor);
      let img = resu.image_colors;
      img.forEach((color) => {
        output.colors.push(color.closest_palette_color_html_code);
      });
      if (output.colors.length < 5) {
        output.colors.push(bgColor);
      }
      output = { ...output, ["thumb"]: thumbnails, ["regular"]: imageUrl };
      contentEnriched.push(output);
    }
    // return contentEnriched;
    return res.status(200).json({
      status: 200,
      success: true,
      data: contentEnriched,
    });
    //     console.log(JSON.parse(response.body));
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: err.message,
    });
    // console.log("🚀 ~ err.message", err.message);
  }
};
