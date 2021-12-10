import React, { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
export const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [archives, setArchives] = useState([]);
  const [currentUserUpdate, setCurrentUserUpdate] = useState(false);
  useEffect(() => {
    if (!isAuthenticated) {
      setArchives([
        {
          _id: "My Archive",
        },
      ]);
    } else if (!isLoading) {
      fetch(`/api/archives/${user.sub}`)
        .then((res) => res.json())
        .then((result) => setArchives(result.data));
    }
  }, [isAuthenticated, currentUserUpdate]);
  return (
    <CurrentUserContext.Provider
      value={{ archives, setArchives, currentUserUpdate, setCurrentUserUpdate }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
