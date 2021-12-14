import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import ButtonSave from "./ButtonSave";
import { FormContext } from "../../Context/FormContext";
import DropDown from "../../Home/Form/DropDown";
const ModalButton = ({ palette, setResponse }) => {
  console.log("🚀 ~ palette", palette);
  const { isAuthenticated, isLoading, user } = useAuth0();
  const { selectedArchive } = useContext(FormContext);
  const handleSavePalette = async () => {
    if (!isLoading && isAuthenticated) {
      const response = await fetch("/api/palette/save", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user: user.sub,
          name: user.name,
          picture: user.picture,
          email: user.email,
          colors: palette.colors,
          archiveName: selectedArchive,
          paletteName: palette.paletteName,
        }),
      }).then((res) => res.json());
      setResponse(response);
    }
  };

  // const handleSharePalette = async () => {
  //   if (!isLoading && isAuthenticated) {
  //     const response = await fetch("/api/palette/share", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         user: user.sub,
  //         name: user.name,
  //         picture: user.picture,
  //         email: user.email,
  //         colors: palette.colors,
  //         archiveName: selectedArchive,
  //         paletteName,
  //       }),
  //     }).then((res) => res.json());
  //     console.log(response);
  //   }
  // };
  if (palette.public && palette.user !== user.sub && palette.user) {
    return (
      <>
        <ButtonSave handleSavePalette={handleSavePalette} />
        <DropDown />
      </>
    );
  } else {
    return null;
  }
};

export default ModalButton;
