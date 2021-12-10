import React, { useRef, useEffect, useContext } from "react";
import { SideWidget, Input, Button } from "./styled-components";
import { FormContext } from "../../Context/FormContext";
const Menu = ({ toggle, setToggle }) => {
  const ref = useRef(null);
  const { handleCreateArchive } = useContext(FormContext);
  useEffect(() => {
    if (toggle) {
      ref.current.focus();
    }
  }, [toggle]);
  if (toggle) {
    return (
      <SideWidget
        onSubmit={(ev) => {
          ev.preventDefault();
          handleCreateArchive(ref.current.value);
        }} //setNewArchive here to fetch in FormContext.js
      >
        New Archive
        <Input ref={ref} required />
        <Button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Save
        </Button>
      </SideWidget>
    );
  }
  return null;
};

export default Menu;
