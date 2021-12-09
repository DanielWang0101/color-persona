import React, { useState } from "react";
import {
  SelectBox,
  DropDownList,
  CheckBox,
  DropdownBtn,
} from "./styled-components";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import Accordion from "./Accordion";
import Profile from "../Header/Profile";
const Archive = () => {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("My Archive");
  const options = ["My Archive", "Color-Persona"];
  // useEffect(() => {
  //   fetch("/api/flights")
  //     .then((res) => res.json())
  //     .then((result) => setFlights(result.data));
  // }, []);
  return (
    <>
      {options.map((option) => {
        return (
          <Accordion
            title={option}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            {options.map((text) => {
              return text;
            })}
          </Accordion>
        );
      })}
      <Profile />
    </>
  );
};

export default Archive;
