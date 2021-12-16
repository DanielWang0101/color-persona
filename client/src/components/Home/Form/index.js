import React, { useContext, useState } from "react";
import { ColorInputContext } from "../../Context/ColorInputsContext";
import { FormContext } from "../../Context/FormContext";
import CreateArchiveMenu from "./CreateArchiveMenu";
import Notifications from "./Notifications";
import MiniSwatch from "./MiniSwatch";
import DropDown from "./DropDown";
import ToggleShare from "./ToggleShare";
import { CurrentUserContext } from "../../Context/CurrentUserContext";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Input,
  FlexColumn,
  FlexRow,
  Description,
  FinePrint,
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
  const { isAuthenticated, loginWithRedirect } = useAuth0();
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
      <Center>
        <MiniSwatch
          style={{ margin: "0 auto" }}
          baseColor={baseColor}
          colorA={colorA}
          colorB={colorB}
          colorD={colorD}
          colorE={colorE}
        />
      </Center>
      <Description>Save This Color Palette</Description>
      {
        //if authenticated, return the form, otherwise return a sign in button
        isAuthenticated ? (
          <>
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
              <ToggleShare checked={checked} setChecked={setChecked} /> Publish
              to Community
            </FlexRow>
            <CreateArchiveMenu
              setToggle={setToggle}
              toggle={toggle}
              setResponse={setResponse}
            />
            <Notifications response={response} setResponse={setResponse} />
            <Button style={{ marginLeft: "auto" }}>Save</Button>
          </>
        ) : (
          <>
            <FinePrint>
              Color wheel can be used to generate color palette, which can be
              saved into your personal archive, after signing in.
            </FinePrint>
            <FinePrint>
              You can then use your share color themes, or copy their hex code.
            </FinePrint>
            <Button
              onClick={(ev) => {
                ev.preventDefault();
                loginWithRedirect();
              }}
              style={{ marginLeft: "auto" }}
            >
              Save
            </Button>
          </>
        )
      }
    </FlexColumn>
  );
};

export default Form;
