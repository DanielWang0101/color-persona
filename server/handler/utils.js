const compColors = require("complementary-colors");
const Color = require("color");
const str1 = "#142814"; //#291529
// const myColor = new compColors(str1);
// const color = Color(myColor.complementary()[1]).hex();
// console.log("🚀 ~ color", color);
const getComplementaryColor = (color) => {
  const myColor = new compColors(color);
  //Self
  const rgbS = myColor.primary()[0];
  const rgbSArray = Color(myColor.primary()[0]).array();
  //Complementary
  const hex = Color(myColor.complementary()[1]).hex();
  const rgb = myColor.complementary()[0];
  const rgbArray = Color(myColor.complementary()[1]).array();
  const result = {
    complementary: { hex, rgb, rgbArray },
    self: { hex: color, rgbS, rgbSArray },
  };
  return result;
};
console.log(getComplementaryColor(str1));
// Todo 👇
// const getTriadic = (color)=>{
//     const myColor = new compColors(color);
//     //Self
//     const rgbS = myColor.primary()[0];
//     const rgbSArray = Color(myColor.primary()[0]).array();
//     //Triadic
//     // First
//     const hex = Color(myColor.complementary()[1]).hex();
//     const rgb = myColor.complementary()[0];
//     const rgbArray = Color(myColor.complementary()[1]).array();
//     //Second
//     const result = {
//       triadic: { hex, rgb, rgbArray },
//       self: { hex: color, rgbS, rgbSArray },
//     };
//     return result;
// }
// Todo 👆
// const getComplementaryColor = (color = "") => {
//   const colorPart = color.slice(1);
//   const ind = parseInt(colorPart, 16);
//   let iter = ((1 << (4 * colorPart.length)) - 1 - ind).toString(16);
//   while (iter.length < colorPart.length) {
//     iter = "0" + iter;
//   }
//   return "#" + iter;
// };

module.exports = { getComplementaryColor };
