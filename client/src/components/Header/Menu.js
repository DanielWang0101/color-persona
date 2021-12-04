import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  DropDown,
  Divider,
  List,
  ListContainer,
  RowFlex,
} from "./styled-components";
import LogoutButton from "./LogoutButton";
const Menu = ({ toggle }) => {
  const { isAuthenticated, user } = useAuth0();
  if (toggle) {
    return (
      <DropDown>
        <RowFlex>
          <img src={user.picture} width="40px" />
          <ListContainer>
            <List>{user.name}</List>
            <List>{user.email}</List>
          </ListContainer>
        </RowFlex>
        <Divider />
        <LogoutButton />
      </DropDown>
    );
  }
  return null;
};

export default Menu;
