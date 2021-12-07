import React, { useEffect, useState } from "react";
import iro from "@jaames/iro";
import { createDefaultWheel, createComplementaryWheel } from "./ColorRules";
import { getComplementaryColor } from "./getColors/getComplementary.js";

const IroColorPicker = ({ input, setInput, rule }) => {
  const colorPickerArray = [];
  useEffect(() => {
    if (rule === "Default") {
      createDefaultWheel();
    }
    if (rule === "Complementary") {
      const colorPicker = new iro.ColorPicker("#picker", {
        width: 350,
        colors: ["rgb(255, 0, 0)", "rgb(0, 255, 0)"],
      });
      colorPicker.on("input:change", (color) => {
        onChange(color);

        // colorPicker.off("color:change", onChange);
      });

      const onChange = (color) => {
        const result = getComplementaryColor(color);
        //Display the comple color on the wheel
        colorPicker.colors[1].hexString = result.complementary.hex;
        // Modify the text value indication on the screen
        const newCo = [...input];
        newCo[0] = colorPicker.colors[0].hexString;
        newCo[1] = colorPicker.colors[1].hexString;
        setInput(newCo);
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
