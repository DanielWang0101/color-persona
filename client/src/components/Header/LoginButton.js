import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "react-loader-spinner";
import { Sign, Avatar } from "./styled-components";
const LoginButton = ({ toggle, setToggle }) => {
  const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();
  if (!isAuthenticated) {
    return (
      <Sign
        isAuthenticated={isAuthenticated}
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Sign>
    );
  } else if (isLoading) {
    return (
      <Loader
        type="Puff"
        color="#d0d0d0"
        height={35}
        width={35}
        timeout={3000} //3 secs
      />
    );
  } else {
    return (
      <Sign onClick={() => setToggle(!toggle)}>
        <Avatar src={user.picture} />
      </Sign>
    );
  }
};

export default LoginButton;
