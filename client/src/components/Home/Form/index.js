import React, { useContext, useState } from "react";
import { ColorInputContext } from "../../Context/ColorInputsContext";
import { FormContext } from "../../Context/FormContext";
import CreateArchiveMenu from "./CreateArchiveMenu";
import Notifications from "./Notifications";
import MiniSwatch from "./MiniSwatch";
import DropDown from "./DropDown";
import ToggleShare from "./ToggleShare";
import { CurrentUserContext } from "../../Context/CurrentUserContext";
import {
  Input,
  FlexColumn,
  FlexRow,
  Description,
  Center,
  Cube,
  ColorList,
  PlusButton,
  Button,
} from "./styled-components";
import { CommunityContext } from "../../Context/CommunityContext";

const Form = ({ setRule }) => {
  const {
    baseColor,
    swatch: { colorA, colorB, colorD, colorE },
  } = useContext(ColorInputContext);
  const { paletteName, setPaletteName, handleSavePalette, handleSharePalette } =
    useContext(FormContext);
  const { currentUserUpdate, setCurrentUserUpdate } =
    useContext(CurrentUserContext);
  const { communityUpdate, setCommunityUpdate } = useContext(CommunityContext);
  const [toggle, setToggle] = useState(false);
  const [checked, setChecked] = useState(false);
  //state for notifications
  const [response, setResponse] = useState(null);

  return (
    <FlexColumn
      onSubmit={async (ev) => {
        ev.preventDefault();
        const res = await handleSavePalette();
        setResponse(res);
        setCurrentUserUpdate(!currentUserUpdate);
        if (checked) {
          await handleSharePalette();
          setCommunityUpdate(!communityUpdate);
        }
      }}
    >
      <MiniSwatch
        baseColor={baseColor}
        colorA={colorA}
        colorB={colorB}
        colorD={colorD}
        colorE={colorE}
      />
      <Description>Save This Color Palette</Description>
      <FlexRow>
        Save to
        <DropDown />
        <PlusButton
          onClick={(ev) => {
            ev.preventDefault();
            setToggle(!toggle);
          }}
        />
      </FlexRow>
      <FlexRow>
        <span style={{ marginRight: "10px" }}> Name</span>

        <Input
          style={{ width: "100%", margin: "0 0 0 0" }}
          value={paletteName}
          onChange={(ev) => {
            setPaletteName(ev.target.value);
          }}
        />
      </FlexRow>
      <FlexRow>
        <ToggleShare checked={checked} setChecked={setChecked} /> Publish to
        Community
      </FlexRow>
      <CreateArchiveMenu
        setToggle={setToggle}
        toggle={toggle}
        setResponse={setResponse}
      />
      <Notifications response={response} setResponse={setResponse} />
      <Button style={{ marginLeft: "auto" }}>Save</Button>
    </FlexColumn>
  );
};

export default Form;
