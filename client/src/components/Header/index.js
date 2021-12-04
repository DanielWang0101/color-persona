import React, { useState } from "react";
import { Logo, NavBar } from "./styled-components";
import LoginButton from "./LoginButton";
import Menu from "./Menu";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <NavBar>
        <Logo>Color Persona</Logo>
        <LoginButton toggle={toggle} setToggle={setToggle} />
      </NavBar>
      <Menu toggle={toggle} />
    </>
  );
};

export default Header;
