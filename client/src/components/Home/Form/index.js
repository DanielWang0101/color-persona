import React, { useContext, useState } from "react";
import { ColorInputContext } from "../../Context/ColorInputsContext";
import CreateArchiveMenu from "./CreateArchiveMenu";
import MiniSwatch from "./MiniSwatch";
import DropDown from "./DropDown";
import ToggleShare from "./ToggleShare";
import {
  FlexColumn,
  FlexRow,
  Description,
  Center,
  Cube,
  ColorList,
  PlusButton,
} from "./styled-components";

const Form = ({ setRule }) => {
  const {
    baseColor,
    swatch: { colorA, colorB, colorD, colorE },
  } = useContext(ColorInputContext);
  const [toggle, setToggle] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <FlexColumn>
      <MiniSwatch
        baseColor={baseColor}
        colorA={colorA}
        colorB={colorB}
        colorD={colorD}
        colorE={colorE}
      />
      <Description>Apply Color Harmony Rule</Description>
      <FlexRow>
        Save to
        <DropDown />
        <PlusButton
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </FlexRow>
      <FlexRow>
        <input type="radio" value="Complementary" name="Rules" /> Complementary
      </FlexRow>
      <FlexRow>
        <input type="radio" value="Triad" name="Rules" /> Triad
      </FlexRow>
      <CreateArchiveMenu setToggle={setToggle} toggle={toggle} />
      <ToggleShare checked={checked} setChecked={setChecked} />
    </FlexColumn>
  );
};

export default Form;
