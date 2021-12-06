import React, { useState } from "react";
import IroColorPicker from "./IroColorPicker";
import iro from "@jaames/iro";

const ColorWheel = () => {
  const [input, setInput] = useState({
    primary: "rgb(255, 0, 0)",
    secondary: "rgb(0, 255, 0)",
    tertiary: "rgb(0, 0, 255)",
  });
  const onColorChange = (colors) => {
    // setInput({
    //   ...input,
    //   primary: colors[0].rgbString,
    //   secondary: colors[1].rgbString,
    //   tertiary: colors[2].rgbString,
    // });
    // console.log(colorPicker.colors);
    // console.log(colors[1]);
    // console.log(colors[2]);
  };
  return (
    <div>
      <IroColorPicker input={input} setInput={setInput} />
      <p>{input.primary}</p>
      <p>{input.secondary}</p>
      <p>{input.tertiary}</p>
    </div>
  );
};

export default ColorWheel;
