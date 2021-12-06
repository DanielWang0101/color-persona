import React, { createContext, useState } from "react";
export const ColorInputContext = createContext();

const ColorInputProvider = ({ children }) => {
  const [input, setInput] = useState({
    primary: "rgb(255, 0, 0)",
    secondary: "rgb(0, 255, 0)",
    tertiary: "rgb(0, 0, 255)",
  });
  return (
    <ColorInputContext.Provider value={{ input, setInput }}>
      {children}
    </ColorInputContext.Provider>
  );
};

export default ColorInputProvider;
