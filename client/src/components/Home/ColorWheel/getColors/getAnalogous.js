const compColors = require("complementary-colors");
const Color = require("color");
// import compColors from "complementary-colors";
// import Color from "color";
const str1 = "#142814"; //#291529
// const myColor = new compColors(str1);
// const color = Color(myColor.complementary()[1]).hex();
// console.log("🚀 ~ color", color);
// "type": "module",
export const getAnalogousColor = (color) => {
  let reg = /^#([0-9a-f]{3}){1,2}$/i;
  if (!reg.test(color)) {
    color = "#00c3ff";
  }
  const myColor = new compColors(color);

  //Self
  const hexS = Color(myColor.primary()[0]).hex();

  //analogousOne
  // const hex = Color(myColor.complementary()[1]).hex();
  const hexOne = Color(hexS).rotate(15).hex();
  //analogousOne-Desaturated
  const hexTwo = Color(hexS).rotate(30).hex();

  //analogousTwo
  // const hexDark = Color(myColor.complementary()[0]).desaturate(0.4).hex();
  const hexThree = Color(hexS).rotate(-15).hex();
  //analogousTwo-whitened
  const hexFour = Color(hexS).rotate(-30).hex();
  const result = {
    analogousOne: hexOne,
    self: hexS,
    analogousTwo: hexTwo,
    analogousThree: hexThree,
    analogousFour: hexFour,
  };

  return result;
};
