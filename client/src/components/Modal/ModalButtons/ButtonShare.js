import React from "react";
import { Button, AnimatedText } from "./styled-components";
import { BiShare } from "react-icons/bi";
const ButtonShare = ({ handleSharePalette }) => {
  return (
    <Button
      onClick={(ev) => {
        ev.preventDefault();
        handleSharePalette();
      }}
    >
      <BiShare />
      Share
    </Button>
  );
};

export default ButtonShare;
