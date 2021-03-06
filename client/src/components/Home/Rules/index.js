import React from "react";
import { FlexColumn, FlexRow, Description, Center } from "./styled-components";
const Rules = ({ setRule }) => {
  return (
    <FlexColumn onChange={(ev) => setRule(ev.target.value)}>
      <Description>Apply Color Harmony Rule</Description>

      <FlexRow>
        <input type="radio" value="Complementary" name="Rules" />
        Complementary
      </FlexRow>
      <FlexRow>
        <input type="radio" value="Triad" name="Rules" /> Triad
      </FlexRow>
      <FlexRow>
        <input type="radio" value="Analogous" name="Rules" /> Analogous
      </FlexRow>
    </FlexColumn>
  );
};

export default Rules;
