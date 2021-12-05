import React from "react";
import iro from "@jaames/iro";

const Wheel = () => {
  const colorPicker = new iro.ColorPicker("#picker");
  return <div id="picker"></div>;
};

export default Wheel;
