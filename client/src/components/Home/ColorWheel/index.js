import React, { useState, useContext } from "react";
import iro from "@jaames/iro";
import IroColorPicker from "./IroColorPicker";
import { ColorInputContext } from "../../Context/ColorInputsContext";
import Swatch from "./Swatch";
import { FlexColumn } from "./styled-components";
const ColorWheel = ({ rule }) => {
  const { input, setInput } = useContext(ColorInputContext);

  return (
    <div>
      <IroColorPicker input={input} setInput={setInput} rule={rule} />

      <Swatch input={input} />
    </div>
  );
};

export default ColorWheel;
