import React, { useRef, useEffect, useContext, useState } from "react";
import { SideWidget, Input, Button } from "./styled-components";
import Notifications from "./Notifications";
import { CurrentUserContext } from "../../Context/CurrentUserContext";
import { FormContext } from "../../Context/FormContext";
const Menu = ({ toggle, setToggle, setResponse }) => {
  const ref = useRef(null);
  const { handleCreateArchive, newArchive, setNewArchive } =
    useContext(FormContext);
  const { currentUserUpdate, setCurrentUserUpdate } =
    useContext(CurrentUserContext);
  // Make input active all the time interesting colors
  useEffect(() => {
    if (toggle) {
      ref.current.focus();
    }
  }, [toggle]);
  if (toggle) {
    return (
      <>
        <SideWidget
          onSubmit={async (ev) => {
            ev.preventDefault();
            const res = await handleCreateArchive();
            console.log(res);
            if (res.success) {
              setToggle(!toggle);
            }
            setResponse(res);
            setCurrentUserUpdate(!currentUserUpdate);
          }} //setNewArchive here to fetch in FormContext.js
        >
          New Archive
          <Input
            ref={ref}
            value={newArchive}
            onChange={(ev) => {
              setNewArchive(ev.target.value);
            }}
            required
          />
          <Button>Save</Button>
        </SideWidget>
      </>
    );
  }
  return null;
};

export default Menu;
