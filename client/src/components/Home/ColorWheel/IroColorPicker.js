import React, { useEffect, useState } from "react";
import iro from "@jaames/iro";
const IroColorPicker = ({ input, setInput }) => {
  useEffect(() => {
    const colorPicker = new iro.ColorPicker("#picker", {
      width: 350,
      colors: ["rgb(255, 0, 0)", "rgb(0, 255, 0)"],
    });
    const onChange = async (color) => {
      try {
        const colorNum = color.hexString.slice(1);
        const response = await fetch(`/complementary/%23${colorNum}`);
        const result = await response.json();
        const feedBack = result.data;
        colorPicker.colors[1].hexString = feedBack.complementary.hex;
        setInput({
          ...input,
          primary: colorPicker.colors[0].rgbString,
          secondary: colorPicker.colors[1].rgbString,
          // tertiary: colorPicker.colors[2].rgbString,
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    colorPicker.on("input:change", (color) => {
      onChange(color);
      // colorPicker.off("color:change", onChange);
    });
  }, []);

  return (
    <>
      <div id="picker"></div>
    </>
  );
};

export default IroColorPicker;
