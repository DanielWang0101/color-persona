import React from "react";
import { NavLink } from "react-router-dom";
import { Links, NavLinksContainer } from "./styled-components";

const NavLinkGroup = () => {
  return (
    <NavLinksContainer>
      <Links exact={true} to="/" activeClassName="active">
        CREATE
      </Links>
      <Links exact={true} to="/inspiration" activeClassName="active">
        ARCHIVES
      </Links>
      <Links exact={true} to="/archives" activeClassName="active">
        INSPIRATION
      </Links>
    </NavLinksContainer>
  );
};

export default NavLinkGroup;
