import React, { useState, useContext } from "react";
import iro from "@jaames/iro";
import IroColorPicker from "./IroColorPicker";
import { ColorInputContext } from "../../Context/ColorInputsContext";
import { Cube, ColorList, Input, FlexColumn } from "./styled-components";
const Swatch = ({
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
  return (
    <FlexColumn>
      {/* <ColorList>
        {input.map((item, idx) => {
          return (
            <li>
              <Cube style={{ backgroundColor: `${item}` }} />
              <Input
                type="text"
                value={item}
                onChange={(ev) => {
                  const newInput = [...input];
                  newInput[idx] = ev.target.value;
                  setInput([newInput]);
                }}
              />
            </li>
          );
        })}
      </ColorList> */}
      {/* setcolorA changes the wheel, also selecting swatch switch basecolor and active color on the wheel */}
      <ColorList>
        <li>
          <Cube style={{ backgroundColor: `${baseColor}` }} />
          <Input
            type="text"
            value={baseColor}
            onChange={(ev) => {
              setBaseColor(ev.target.value);
            }}
          />
        </li>
        <li>
          <Cube style={{ backgroundColor: `${colorB}` }} />
          <Input type="text" value={colorB} />
        </li>
        <li>
          <Cube style={{ backgroundColor: `${colorC}` }} />
          <Input type="text" value={colorC} />
        </li>
        <li>
          <Cube style={{ backgroundColor: `${colorD}` }} />
          <Input type="text" value={colorD} />
        </li>
        <li>
          <Cube style={{ backgroundColor: `${colorE}` }} />
          <Input type="text" value={colorE} />
        </li>
      </ColorList>
    </FlexColumn>
  );
};

export default Swatch;
