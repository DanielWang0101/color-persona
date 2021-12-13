// var axios = require("axios").default;
let s = encodeURIComponent("https://bing-news-search1.p.rapidapi.com/");
console.log("🚀 ~ s", s);
var options = {
  method: "GET",
  url: "https://bing-news-search1.p.rapidapi.com/news",
  params: { safeSearch: "Off", textFormat: "Raw" },
  headers: {
    "x-bingapis-sdk": "true",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key": "a38ede2c3amsh5f54d55e0768237p1a4461jsn920b95bd1eba",
  },
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
