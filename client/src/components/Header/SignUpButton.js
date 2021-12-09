import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Sign } from "./styled-components";
const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Sign
      className="btn btn-primary btn-block"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </Sign>
  );
};

export default SignupButton;
