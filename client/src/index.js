import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import ColorInputProvider from "./components/Context/ColorInputsContext";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import CurrentUserProvider from "./components/Context/CurrentUserContext";
import FormProvider from "./components/Context/FormContext";
import InspirationProvider from "./components/Context/InspirationContext";
import CommunityProvider from "./components/Context/CommunityContext";
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
ReactDOM.render(
  <BrowserRouter>
    {/* <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    > */}
    <Auth0ProviderWithHistory>
      <CurrentUserProvider>
        <ColorInputProvider>
          <FormProvider>
            <InspirationProvider>
              <CommunityProvider>
                <App />
              </CommunityProvider>
            </InspirationProvider>
          </FormProvider>
        </ColorInputProvider>
      </CurrentUserProvider>
    </Auth0ProviderWithHistory>
    {/* </Auth0Provider> */}
  </BrowserRouter>,
  document.getElementById("root")
);
