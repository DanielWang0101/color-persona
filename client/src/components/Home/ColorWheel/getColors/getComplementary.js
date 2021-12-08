const compColors = require("complementary-colors");
const Color = require("color");
// import compColors from "complementary-colors";
// import Color from "color";
const str1 = "#142814"; //#291529
// const myColor = new compColors(str1);
// const color = Color(myColor.complementary()[1]).hex();
// console.log("🚀 ~ color", color);
// "type": "module",
export const getComplementaryColor = (color) => {
  let reg = /^#([0-9a-f]{3}){1,2}$/i;
  if (!reg.test(color)) {
    color = "#00c3ff";
  }
  const myColor = new compColors(color);

  //Self
  const hexS = Color(myColor.primary()[0]).hex();
  const rgbS = myColor.primary()[0];
  const rgbSArray = Color(myColor.primary()[0]).array();
  //Self-Desaturated
  const hexSD = Color(myColor.primary()[0]).desaturate(0.4).hex();
  const rgbSD = Color(hexSD).object();
  const rgbSDArray = Color(hexSD).rgb().array();
  //Self-whitened
  const hexSW = Color(myColor.primary()[0]).lighten(0.5).hex();
  const rgbSW = Color(hexSW).object();
  const rgbSWArray = Color(hexSW).rgb().array();
  //Complementary
  // const hex = Color(myColor.complementary()[1]).hex();
  const hex = Color(hexS).rotate(180).hex();

  const rgb = myColor.complementary()[0];
  const rgbArray = Color(myColor.complementary()[1]).array();
  //ComplementaryD
  // const hexDark = Color(myColor.complementary()[0]).desaturate(0.4).hex();
  const hexDark = Color(hex).desaturate(0.4).hex();

  const rgbDark = Color(hexDark).object();
  const rgbArrayDark = Color(hexDark).rgb().array();

  const result = {
    complementary: { hex, rgb, rgbArray },
    self: { hex: color, rgbS, rgbSArray },
    complementaryDark: { hexDark, rgbDark, rgbArrayDark },
    selfDesaturated: { hexSD, rgbSD, rgbSDArray },
    selfWhitened: { hexSW, rgbSW, rgbSWArray },
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
