import React from "react";
import { ColorList, Cube } from "./styled-components";
const MiniSwatch = ({ colorA, colorB, colorD, colorE, baseColor }) => {
  return (
    <ColorList>
      <Cube style={{ backgroundColor: colorA }} />
      <Cube style={{ backgroundColor: colorB }} />
      <Cube style={{ backgroundColor: baseColor }} />
      <Cube style={{ backgroundColor: colorD }} />
      <Cube style={{ backgroundColor: colorE }} />
    </ColorList>
  );
};

export default MiniSwatch;
