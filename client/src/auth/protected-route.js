import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loader from "react-loader-spinner";
const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => (
        <Loader
          type="Puff"
          color="#d0d0d0"
          height={35}
          width={35}
          timeout={3000} //3 secs
        />
      ),
    })}
    {...args}
  />
);

export default ProtectedRoute;
