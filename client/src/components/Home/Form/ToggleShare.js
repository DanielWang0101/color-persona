import React, { useState } from "react";
import {
  ButtonToggle,
  Container,
  StyledBackdrop,
  Ball,
} from "./styled-components";
const ToggleShare = ({ checked, setChecked }) => {
  return (
    <ButtonToggle
      onClick={() => {
        setChecked(!checked);
      }}
    >
      <Container>
        <StyledBackdrop
          style={checked ? { background: "red" } : { background: "grey" }}
        />
        <Ball
          checked={checked}
          style={checked ? { left: "70%" } : { left: "0" }}
        />
      </Container>
    </ButtonToggle>
  );
};

export default ToggleShare;
