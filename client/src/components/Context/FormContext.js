import React, { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
export const FormContext = createContext();
// states wont be exported, only the set functions
//states are used to do fetch.
const FromProvider = ({ children }) => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  // set form values prepare for submit

  //   const [archives, setArchives] = useState([]);
  //   const [currentUserUpdate, setCurrentUserUpdate] = useState(false);

  // Two useEffects
  // 1. Create a new Archive
  // States required
  const [newArchive, setNewArchive] = useState("");
  const handleCreateArchive = async (value) => {
    setNewArchive(value);
    if (!isLoading && isAuthenticated) {
      const response = await fetch("/api/archive/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user: user.sub,
          newArchive,
        }),
      }).then((res) => res.json());
      console.log(response.message);
    }
  };
  // 2. Update an Archive (require attention)
  //   useEffect(() => {
  //     if (!isAuthenticated) {
  //       setArchives([
  //         {
  //           _id: "My Archive",
  //         },
  //       ]);
  //     }
  //     fetch(`/api/archives/${user.sub}`)
  //       .then((res) => res.json())
  //       .then((result) => setArchives(result.data));
  //   }, [isAuthenticated, currentUserUpdate]);
  // export all set function
  return (
    <FormContext.Provider value={{ handleCreateArchive }}>
      {children}
    </FormContext.Provider>
  );
};

export default FromProvider;
