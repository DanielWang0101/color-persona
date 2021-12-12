import React from "react";
import { Cube, ColorList, FlexColumn } from "./styled-components";
const MiniSwatch = ({ palette }) => {
  return (
    <FlexColumn>
      <ColorList>
        {palette.colors.map((color) => {
          return <Cube style={{ backgroundColor: color }} />;
        })}
      </ColorList>
      <div>{palette.name}</div>
    </FlexColumn>
  );
};

export default MiniSwatch;
