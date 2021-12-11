import React, { useEffect, useState } from "react";
import iro from "@jaames/iro";
import { createDefaultWheel, createComplementaryWheel } from "./ColorRules";
import { getComplementaryColor } from "./getColors/getComplementary.js";

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
  }, [rule, colorC]); //Whenever the rule changed, a new instance will be created

  return (
    <>
      <div id="picker" key={rule} style={{ zIndex: "0" }}></div>

      {/* Whenever the rule changed, the #picker DOM element get discard and recreated */}
    </>
  );
};

export default IroColorPicker;
