import React, { useState, useContext, useRef, useEffect } from "react";
import iro from "@jaames/iro";
import IroColorPicker from "./IroColorPicker";
import { ColorInputContext } from "../../Context/ColorInputsContext";
import { Cube, ColorList, Input, FlexColumn } from "./styled-components";

const Swatch = ({
  rule,
  setRule,
  input,
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
  setInput,
  baseColor,
  setBaseColor,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <FlexColumn>
      {/* setcolorA changes the wheel, also selecting swatch switch basecolor and active color on the wheel */}
      <ColorList>
        <li>
          <Cube style={{ backgroundColor: `${colorA}` }} />
          <Input type="text" value={colorA} defaultValue="#" />
        </li>
        <li>
          <Cube style={{ backgroundColor: `${colorB}` }} />
          <Input type="text" value={colorB} defaultValue="#" />
        </li>

        <li>
          <Cube style={{ backgroundColor: `${baseColor}` }} />
          <Input
            ref={ref}
            type="text"
            value={baseColor}
            defaultValue="#"
            onChange={(ev) => {
              setBaseColor(ev.target.value);
              const cpContainer = document.getElementById("picker");
              const children = cpContainer.childNodes[0];
              cpContainer.removeChild(children);
              setColorC(ev.target.value);
            }}
          />
        </li>

        <li>
          <Cube style={{ backgroundColor: `${colorD}` }} />
          <Input type="text" value={colorD} defaultValue="#" />
        </li>
        <li>
          <Cube style={{ backgroundColor: `${colorE}` }} />
          <Input type="text" defaultValue="#" value={colorE} />
        </li>
      </ColorList>
    </FlexColumn>
  );
};

export default Swatch;
