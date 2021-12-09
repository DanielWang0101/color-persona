import React, { useState } from "react";
import ColorWheel from "./ColorWheel";
import Rules from "./Rules";
import Form from "./Form";
import { FlexRow } from "./styled-components";
const HomePage = () => {
  const [rule, setRule] = useState("Complementary");
  return (
    <FlexRow>
      <Rules setRule={setRule} />
      <ColorWheel rule={rule} setRule={setRule} />
      <div style={{ margin: "0 auto" }}>
        <Form />
      </div>
    </FlexRow>
  );
};

export default HomePage;
