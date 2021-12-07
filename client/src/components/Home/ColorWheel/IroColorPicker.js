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
        colors: [
          defaultInitialColor.self.hex,
          defaultInitialColor.selfDesaturated.hexSD,
          defaultInitialColor.complementary.hex,
          defaultInitialColor.complementaryDark.hexDark,
        ],
      });
      // Set initial Swatch display on the screen
      // setInput([
      //   defaultInitialColor.self.hex,
      //   defaultInitialColor.selfDesaturated.hexSD,
      //   defaultInitialColor.complementary.hex,
      //   defaultInitialColor.complementaryDark.hexDark,
      // ]);
      setColorA(defaultInitialColor.self.hex);
      setColorB(defaultInitialColor.selfDesaturated.hexSD);
      setColorC(defaultInitialColor.complementary.hex);
      setColorD(defaultInitialColor.complementaryDark.hexDark);
      setColorE();
      colorPicker.on("input:change", (color) => {
        onChange(color);

        // colorPicker.off("color:change", onChange);
      });

      const onChange = (color) => {
        if (color.index === 0) {
          const result = getComplementaryColor(color);
          //Display the colors on the wheel
          colorPicker.colors[1].hexString = result.selfDesaturated.hexSD;
          colorPicker.colors[2].hexString = result.complementary.hex;

          colorPicker.colors[3].hexString = result.complementaryDark.hexDark;

          // Modify the Swatch display on the screen
          // const newCo = [...input];
          // newCo[0] = colorPicker.colors[0].hexString;
          // newCo[1] = colorPicker.colors[1].hexString;
          // newCo[2] = colorPicker.colors[2].hexString;
          // newCo[3] = colorPicker.colors[3].hexString;

          // setInput(newCo);
          setColorA(colorPicker.colors[0].hexString);
          setColorB(colorPicker.colors[1].hexString);
          setColorC(colorPicker.colors[2].hexString);
          setColorD(colorPicker.colors[3].hexString);
          //baseColor will be persisted if rule changed
          setBaseColor(colorPicker.colors[0].hexString);
        } else {
          colorPicker.setActiveColor(0);
          console.log(color.index);
        }
      };
    }
  }, [rule]); //Whenever the rule changed, a new instance will be created
  return (
    <>
      <div id="picker" key={rule}></div>

      {/* Whenever the rule changed, the #picker DOM element get discard and recreated */}
    </>
  );
};

export default IroColorPicker;
