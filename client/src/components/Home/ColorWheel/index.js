import React, { useState, useContext } from "react";
import iro from "@jaames/iro";
import IroColorPicker from "./IroColorPicker";
import { ColorInputContext } from "../../Context/ColorInputsContext";
import Swatch from "./Swatch";
import { Main } from "./styled-components";
const ColorWheel = ({ rule, setRule }) => {
  const {
    input,
    setInput,
    baseColor,
    setBaseColor,
    swatch: {
      colorA,
      setColorA,
      colorB,
      setColorB,
      colorC,
      setColorC,
      colorD,
      setColorD,
      colorE,
      setColorE,
    },
  } = useContext(ColorInputContext);

  return (
    <Main>
      <IroColorPicker
        input={input}
        setInput={setInput}
        rule={rule}
        baseColor={baseColor}
        setBaseColor={setBaseColor}
        colorA={colorA}
        colorC={colorC}
        setColorA={setColorA}
        setColorB={setColorB}
        setColorC={setColorC}
        setColorD={setColorD}
        setColorE={setColorE}
      />

      <Swatch
        rule={rule}
        setRule={setRule}
        baseColor={baseColor}
        setBaseColor={setBaseColor}
        input={input}
        setInput={setInput}
        colorA={colorA}
        colorB={colorB}
        colorC={colorC}
        colorD={colorD}
        colorE={colorE}
        setColorA={setColorA}
        setColorB={setColorB}
        setColorC={setColorC}
        setColorD={setColorD}
        setColorE={setColorE}
      />
    </Main>
  );
};

export default ColorWheel;
