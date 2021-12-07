import React, { useState, useContext } from "react";
import iro from "@jaames/iro";
import IroColorPicker from "./IroColorPicker";
import { ColorInputContext } from "../../Context/ColorInputsContext";
import { Cube, ColorList, Input } from "./styled-components";
const Swatch = ({ input }) => {
  return (
    <ColorList>
      {input.map((item) => {
        return (
          <li>
            <Cube style={{ backgroundColor: `${item}` }} />
            <Input type="text" value={item} />
          </li>
        );
      })}
    </ColorList>
  );
};

export default Swatch;
