import React, { createContext, useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ColorInputContext } from "./ColorInputsContext";
export const FormContext = createContext();
// states wont be exported, only the set functions
//states are used to do fetch.
const FromProvider = ({ children }) => {
  const {
    baseColor,
    swatch: { colorA, colorB, colorD, colorE },
  } = useContext(ColorInputContext);
  const { isAuthenticated, user, isLoading } = useAuth0();
  // set form values prepare for submit
  // Two useEffects
  // 1. Create a new Archive
  // States required
  const [newArchive, setNewArchive] = useState("");
  const handleCreateArchive = async () => {
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
      return response;
    }
  };
  // 2. Update an Archive/ Share an Archive (require attention)
  const [selectedArchive, setSelectedArchive] = useState("select an option");
  const [paletteName, setPaletteName] = useState("My Color Theme");

  const handleSavePalette = async () => {
    if (!isLoading && isAuthenticated) {
      const response = await fetch("/api/palette/save", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          colors: [colorA, colorB, baseColor, colorD, colorE],
          user: user.sub,
          archiveName: selectedArchive,
          paletteName,
        }),
      }).then((res) => res.json());
      return response;
    }
  };

  const handleSharePalette = async () => {
    if (!isLoading && isAuthenticated) {
      const response = await fetch("/api/palette/share", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user: user.sub,
          name: user.name,
          picture: user.picture,
          email: user.email,
          colors: [colorA, colorB, baseColor, colorD, colorE],
          archiveName: selectedArchive,
          paletteName,
        }),
      }).then((res) => res.json());
      console.log(response);
    }
  };

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
    <FormContext.Provider
      value={{
        handleCreateArchive,
        newArchive,
        setNewArchive,
        selectedArchive,
        setSelectedArchive,
        paletteName,
        setPaletteName,
        handleSavePalette,
        handleSharePalette,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FromProvider;
