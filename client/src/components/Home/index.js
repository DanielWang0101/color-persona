import React, { useState } from "react";
import ColorWheel from "./ColorWheel";
import Rules from "./Rules";
import { FlexRow } from "./styled-components";
const HomePage = () => {
  const [rule, setRule] = useState("Default");
  return (
    <FlexRow>
      <Rules setRule={setRule} />
      <ColorWheel rule={rule} setRule={setRule} />
    </FlexRow>
  );
};

export default HomePage;
