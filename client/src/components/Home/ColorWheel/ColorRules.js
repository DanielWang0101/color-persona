import React, { useContext } from "react";
import iro from "@jaames/iro";
import { ColorInputContext } from "../../Context/ColorInputsContext";
export const createDefaultWheel = () => {
  const colorPicker = new iro.ColorPicker("#picker", {
    width: 350,
    colors: ["rgb(255, 0, 0)"],
  });
  colorPicker.on("input:change", (color) => {
    console.log(color.hexString);
  });
};
