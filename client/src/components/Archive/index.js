import React, { useContext, useEffect, useState } from "react";
import {
  SelectBox,
  DropDownList,
  CheckBox,
  DropdownBtn,
} from "./styled-components";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import Accordion from "./Accordion";
import Profile from "../Header/Profile";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { useAuth0 } from "@auth0/auth0-react";
const Archive = () => {
  const { isAuthenticated, user } = useAuth0();

  const { archives, setArchives } = useContext(CurrentUserContext);

  useEffect(() => {
    if (!isAuthenticated) {
      setArchives([
        {
          _id: "My Archive",
        },
      ]);
    }
    fetch(`/api/archives/${user.sub}`)
      .then((res) => res.json())
      .then((result) => setArchives(result.data));
  }, [isAuthenticated]);
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
