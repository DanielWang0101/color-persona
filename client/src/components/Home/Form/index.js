import React, { useContext } from "react";
import { ColorInputContext } from "../../Context/ColorInputsContext";
import {
  FlexColumn,
  FlexRow,
  Description,
  Center,
  Cube,
  ColorList,
} from "./styled-components";
const Form = ({ setRule }) => {
  const {
    baseColor,
    swatch: { colorA, colorB, colorD, colorE },
  } = useContext(ColorInputContext);
  return (
    <FlexColumn>
      <ColorList>
        <Cube style={{ backgroundColor: colorA }} />
        <Cube style={{ backgroundColor: colorB }} />
        <Cube style={{ backgroundColor: baseColor }} />
        <Cube style={{ backgroundColor: colorD }} />
        <Cube style={{ backgroundColor: colorE }} />
      </ColorList>
      <Description>Apply Color Harmony Rule</Description>
      <FlexRow>
        <input type="radio" value="Default" name="Rules" /> Default
      </FlexRow>
      <FlexRow>
        <input type="radio" value="Complementary" name="Rules" /> Complementary
      </FlexRow>
      <FlexRow>
        <input type="radio" value="Triad" name="Rules" /> Triad
      </FlexRow>
    </FlexColumn>
  );
};

export default Form;
