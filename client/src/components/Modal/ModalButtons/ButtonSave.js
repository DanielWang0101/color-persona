import React from "react";
import { Button, AnimatedText } from "./styled-components";
import { RiSaveFill } from "react-icons/ri";
const ButtonSave = ({ handleSavePalette }) => {
  return (
    <Button
      onClick={(ev) => {
        ev.preventDefault();
        handleSavePalette();
      }}
    >
      <RiSaveFill />
      save
    </Button>
  );
};

export default ButtonSave;
