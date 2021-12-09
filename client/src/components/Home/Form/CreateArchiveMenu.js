import React, { useRef, useEffect } from "react";
import { SideWidget, Input, Button } from "./styled-components";
const Menu = ({ toggle, setToggle }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (toggle) {
      ref.current.focus();
    }
  }, [toggle]);
  if (toggle) {
    return (
      <SideWidget>
        New Archive
        <Input ref={ref} />
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
