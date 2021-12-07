import React, { createContext, useState } from "react";
const Color = require("color");
export const ColorInputContext = createContext();

const ColorInputProvider = ({ children }) => {
  //Testing States
  const initialState = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"];
  const [input, setInput] = useState(initialState);
  //BaseColor States
  const randomColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"); //generate a random baseColor each time the page refresh;
  const initialBaseColor = Color(randomColor).black(0).hex(); //remove black and white
  const [baseColor, setBaseColor] = useState(initialBaseColor);
  //Swatch Color States
  const [colorA, setColorA] = useState();
  const [colorB, setColorB] = useState();
  const [colorC, setColorC] = useState();
  const [colorD, setColorD] = useState();
  const [colorE, setColorE] = useState();

  return (
    <ColorInputContext.Provider
      value={{
        input,
        setInput,
        baseColor,
        setBaseColor,
        swatch: {
          colorA,
          setColorA,
          colorB,
          setColorB,
          colorC,
          setColorC,
          colorD,
          setColorD,
          colorE,
          setColorE,
        },
      }}
    >
      {children}
    </ColorInputContext.Provider>
  );
};

export default ColorInputProvider;
