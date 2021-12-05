import React from "react";
import iro from "@jaames/iro";
const Wheel = () => {
  const colorPicker = new iro.ColorPicker("#picker", {
    width: 500,
  });
  return (
    <>
      <div id="picker"></div>
      <p>{colorPicker.color.hexString}</p>
    </>
  );
};

export default Wheel;
