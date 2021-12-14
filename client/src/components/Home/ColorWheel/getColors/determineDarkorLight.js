const compColors = require("complementary-colors");
const Color = require("color");
// import compColors from "complementary-colors";
// import Color from "color";
const str1 = "#142814"; //#291529
// const myColor = new compColors(str1);
// const color = Color(myColor.complementary()[1]).hex();
// console.log("🚀 ~ color", color);
// "type": "module",
export const determinDarkLight = (color) => {
  let compare = Color(color);
  let result = compare.isLight();
  return result;
};
