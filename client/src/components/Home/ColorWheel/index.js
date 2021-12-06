import React, { useState, useContext } from "react";
import iro from "@jaames/iro";
import IroColorPicker from "./IroColorPicker";
import { ColorInputContext } from "../../Context/ColorInputsContext";

const ColorWheel = () => {
  const { input, setInput } = useContext(ColorInputContext);
  const [rule, setRule] = useState("Default");

  return (
    <div>
      <IroColorPicker input={input} setInput={setInput} rule={rule} />
      <p>{input.primary}</p>
      <p>{input.secondary}</p>
      <p>{input.tertiary}</p>
      <div onChange={(ev) => setRule(ev.target.value)}>
        <input type="radio" value="Default" name="Rules" /> Default
        <input type="radio" value="Complementary" name="Rules" /> Complementary
      </div>
    </div>
  );
};

export default ColorWheel;
