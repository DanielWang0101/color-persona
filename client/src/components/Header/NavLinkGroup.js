import React from "react";
import { NavLink } from "react-router-dom";
import { Links, NavLinksContainer } from "./styled-components";

const NavLinkGroup = () => {
  return (
    <NavLinksContainer>
      <Links exact={true} to="/" activeClassName="active">
        CREATE
      </Links>
      <Links exact={true} to="/archives" activeClassName="active">
        ARCHIVES
      </Links>
      <Links exact={true} to="/inspiration" activeClassName="active">
        INSPIRATION
      </Links>
      <Links exact={true} to="/community" activeClassName="active">
        COMMUNITY
      </Links>
    </NavLinksContainer>
  );
};

export default NavLinkGroup;
