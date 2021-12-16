const compColors = require("complementary-colors");
const Color = require("color");
// import compColors from "complementary-colors";
// import Color from "color";
const str1 = "#142814"; //#291529
// const myColor = new compColors(str1);
// const color = Color(myColor.complementary()[1]).hex();
// console.log("🚀 ~ color", color);
// "type": "module",
export const getTriadicColor = (color) => {
  let reg = /^#([0-9a-f]{3}){1,2}$/i;
  if (!reg.test(color)) {
    color = "#00c3ff";
  }
  const myColor = new compColors(color);

  //Self
  const hexS = Color(myColor.primary()[0]).hex();

  //triadicOne
  // const hex = Color(myColor.complementary()[1]).hex();
  const hexOne = Color(hexS).rotate(120).hex();
  //triadicOne-Desaturated
  const hexOneD = Color(hexOne).desaturate(0.4).hex();

  //triadicTwo
  // const hexDark = Color(myColor.complementary()[0]).desaturate(0.4).hex();
  const hexTwo = Color(hexS).rotate(240).hex();
  //triadicTwo-whitened
  const hexTwoW = Color(hexTwo).lighten(0.2).hex();
  const result = {
    triadicOne: hexOne,
    self: hexS,
    triadicTwo: hexTwo,
    triadicOneD: hexOneD,
    triadicTwoW: hexTwoW,
  };

  return result;
};
// export default getComplementaryColor;
// export const getComplementaryColor = (req, res) => {
//   try {
//     const { color } = req.params;
//     const myColor = new compColors(color);
//     //Self
//     const rgbS = myColor.primary()[0];
//     const rgbSArray = Color(myColor.primary()[0]).array();
//     //Complementary
//     const hex = Color(myColor.complementary()[1]).hex();
//     const rgb = myColor.complementary()[0];
//     const rgbArray = Color(myColor.complementary()[1]).array();
//     const result = {
//       complementary: { hex, rgb, rgbArray },
//       self: { hex: color, rgbS, rgbSArray },
//     };
//     return res.status(200).json({
//       status: 200,
//       data: result,
//     });
//   } catch (err) {
//     return res.status(404).json({
//       status: 404,
//       message: err.message,
//     });
//   }
// };
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

// module.exports = { getComplementaryColor };
// export default getComplementaryColor;
