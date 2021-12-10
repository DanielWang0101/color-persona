import React, { createContext, useState } from "react";

export const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {
  const [archives, setArchives] = useState([]);
  return (
    <CurrentUserContext.Provider value={{ archives, setArchives }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
