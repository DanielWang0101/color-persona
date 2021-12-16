import React, { useEffect, useState } from "react";
import iro from "@jaames/iro";
import { createDefaultWheel, createComplementaryWheel } from "./ColorRules";
import { getComplementaryColor } from "./getColors/getComplementary.js";
import { getTriadicColor } from "./getColors/getTriadic";
import { getAnalogousColor } from "./getColors/getAnalogous";
const IroColorPicker = ({
  input,
  setInput,
  rule,
  baseColor,
  setBaseColor,
  colorA,
  colorC,
  setColorA,
  setColorB,
  setColorC,
  setColorD,
  setColorE,
}) => {
  const colorPickerArray = [];
  useEffect(() => {
    if (rule === "Default") {
      createDefaultWheel();
    }
    if (rule === "Complementary") {
      //Creat the color wheel
      //Generate four Complementary colors
      const defaultInitialColor = getComplementaryColor(baseColor);
      const colorPicker = new iro.ColorPicker("#picker", {
        width: 350,
        activeHandleRadius: 17,
        handleRadius: 15,
        handleSvg: "#handle",
        handleProps: { x: 0, y: -5 },
        colors: [
          defaultInitialColor.self.hex,
          defaultInitialColor.selfDesaturated.hexSD,
          defaultInitialColor.complementary.hex,
          defaultInitialColor.complementaryDark.hexDark,
          defaultInitialColor.selfWhitened.hexSW,
        ],
      });
      // Set initial Swatch display on the screen

      setColorA(defaultInitialColor.selfWhitened.hexSW);
      setColorB(defaultInitialColor.selfDesaturated.hexSD);
      // setColorC();
      setColorD(defaultInitialColor.complementary.hex);
      setColorE(defaultInitialColor.complementaryDark.hexDark);
      colorPicker.on("input:change", (color) => {
        onChange(color);
      });

      const onChange = (color) => {
        if (color.index === 0) {
          const result = getComplementaryColor(color.hexString);
          //Display the colors on the wheel

          colorPicker.colors[1].hexString = result.selfDesaturated.hexSD;
          colorPicker.colors[2].hexString = result.complementary.hex;

          colorPicker.colors[3].hexString = result.complementaryDark.hexDark;
          colorPicker.colors[4].hexString = result.selfWhitened.hexSW;

          // Modify the Swatch display on the screen
          //baseColor will be persisted if rule changed
          setBaseColor(colorPicker.colors[0].hexString);
          setColorA(colorPicker.colors[4].hexString);
          setColorB(colorPicker.colors[1].hexString);
          // setColorC();
          setColorD(colorPicker.colors[2].hexString);
          setColorE(colorPicker.colors[3].hexString);
        } else {
          colorPicker.setActiveColor(0);
          console.log(color.index);
        }
      };
    }
    if (rule === "Triad") {
      const defaultInitialColor = getTriadicColor(baseColor);

      /*
      triadicOne: hexOne,
    self: hexS,
    triadicTwo: hexTwo,
    triadicOneD: hexOneD,
    triadicTwoW: hexTwoW,
      
      */
      const colorPicker = new iro.ColorPicker("#picker", {
        width: 350,
        activeHandleRadius: 17,
        handleRadius: 15,
        handleSvg: "#handle",
        handleProps: { x: 0, y: -5 },
        colors: [
          defaultInitialColor.self,
          defaultInitialColor.triadicOne,
          defaultInitialColor.triadicOneD,
          defaultInitialColor.triadicTwo,
          defaultInitialColor.triadicTwoW,
        ],
      });
      // Set initial Swatch display on the screen

      setColorA(defaultInitialColor.triadicOne);
      setColorB(defaultInitialColor.triadicOneD);
      // setColorC();
      setColorD(defaultInitialColor.triadicTwo);
      setColorE(defaultInitialColor.triadicTwoW);
      colorPicker.on("input:change", (color) => {
        onChange(color);
      });

      const onChange = (color) => {
        if (color.index === 0) {
          const result = getTriadicColor(color.hexString);
          //Display the colors on the wheel

          colorPicker.colors[1].hexString = result.triadicOne;
          colorPicker.colors[2].hexString = result.triadicOneD;

          colorPicker.colors[3].hexString = result.triadicTwo;
          colorPicker.colors[4].hexString = result.triadicTwoW;

          // Modify the Swatch display on the screen
          //baseColor will be persisted if rule changed
          setBaseColor(colorPicker.colors[0].hexString);
          setColorA(colorPicker.colors[4].hexString);
          setColorB(colorPicker.colors[1].hexString);
          // setColorC();
          setColorD(colorPicker.colors[2].hexString);
          setColorE(colorPicker.colors[3].hexString);
        } else {
          colorPicker.setActiveColor(0);
          console.log(color.index);
        }
      };
    }
    if (rule === "Analogous") {
      /* analogousOne: hexOne,
    self: hexS,
    analogousTwo: hexTwo,
    analogousThree: hexThree,
    analogousFour: hexFour,*/

      const defaultInitialColor = getAnalogousColor(baseColor);

      const colorPicker = new iro.ColorPicker("#picker", {
        width: 350,
        activeHandleRadius: 17,
        handleRadius: 15,
        handleSvg: "#handle",
        handleProps: { x: 0, y: -5 },
        colors: [
          defaultInitialColor.self,
          defaultInitialColor.analogousOne,
          defaultInitialColor.analogousTwo,
          defaultInitialColor.analogousThree,
          defaultInitialColor.analogousFour,
        ],
      });
      // Set initial Swatch display on the screen

      setColorA(defaultInitialColor.analogousOne);
      setColorB(defaultInitialColor.analogousTwo);
      // setColorC();
      setColorD(defaultInitialColor.analogousThree);
      setColorE(defaultInitialColor.analogousFour);
      colorPicker.on("input:change", (color) => {
        onChange(color);
      });

      const onChange = (color) => {
        if (color.index === 0) {
          const result = getAnalogousColor(color.hexString);
          //Display the colors on the wheel

          colorPicker.colors[1].hexString = result.analogousOne;
          colorPicker.colors[2].hexString = result.analogousTwo;

          colorPicker.colors[3].hexString = result.analogousThree;
          colorPicker.colors[4].hexString = result.analogousFour;

          // Modify the Swatch display on the screen
          //baseColor will be persisted if rule changed
          setBaseColor(colorPicker.colors[0].hexString);
          setColorA(colorPicker.colors[1].hexString);
          setColorB(colorPicker.colors[2].hexString);
          // setColorC();
          setColorD(colorPicker.colors[3].hexString);
          setColorE(colorPicker.colors[4].hexString);
        } else {
          colorPicker.setActiveColor(0);
          console.log(color.index);
        }
      };
    }
  }, [rule, colorC]); //Whenever the rule changed, a new instance will be created

  return (
    <>
      <div id="picker" key={rule} style={{ zIndex: "0" }}></div>

      {/* Whenever the rule changed, the #picker DOM element get discard and recreated */}
    </>
  );
};

export default IroColorPicker;
