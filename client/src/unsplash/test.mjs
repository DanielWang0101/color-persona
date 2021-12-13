import fetch from "node-fetch";
import { createApi } from "unsplash-js";
global.fetch = fetch;
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// { path: "./client/.env" }
const { REACT_APP_UNSPLASH_ACCESS_KEY } = process.env;

const unsplash = createApi({
  accessKey: REACT_APP_UNSPLASH_ACCESS_KEY,
  // apiUrl: "http://localhost:8000/unsplash-proxy",
});

export const getImages = async () => {
  try {
    const res = await unsplash.search.getPhotos({
      query: "graphic art",
      page: 1,
      perPage: 3,
      // color: 'green',
      // orientation: 'portrait',
    });
    const feed = res.response;
    // console.log("🚀 ~ res.response;", res);

    // extract total and results array from response
    const { total, results } = feed;
    console.log(results);
  } catch (err) {
    console.log(err.message);
  }
};

getImages();
