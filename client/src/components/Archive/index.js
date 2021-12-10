import React, { useContext, useEffect, useState } from "react";

import { FiChevronDown, FiCheck } from "react-icons/fi";
import Accordion from "./Accordion";
import Profile from "../Header/Profile";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { useAuth0 } from "@auth0/auth0-react";
const Archive = () => {
  const { archives, setArchives } = useContext(CurrentUserContext);

  return (
    <>
      {archives.map((archive) => {
        return (
          <Accordion
            title={archive._id}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            {/* {options.map((text) => {
              return text;
            })} */}
          </Accordion>
        );
      })}
      <Profile />
    </>
  );
};

export default Archive;
