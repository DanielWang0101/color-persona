import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Sign } from "./styled-components";
const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Sign isAuthenticated={isAuthenticated} onClick={() => logout()}>
        Log Out
      </Sign>
    )
  );
};

export default LogoutButton;
