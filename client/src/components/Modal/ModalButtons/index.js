import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import ButtonSave from "./ButtonSave";
import ButtonShare from "./ButtonShare";
import { FormContext } from "../../Context/FormContext";
import { CurrentUserContext } from "../../Context/CurrentUserContext";
import { CommunityContext } from "../../Context/CommunityContext";
import DropDown from "../../Home/Form/DropDown";
const ModalButton = ({ palette, setResponse }) => {
  console.log("🚀 ~ palette", palette);
  const { isAuthenticated, isLoading, user } = useAuth0();
  const { selectedArchive } = useContext(FormContext);
  const { currentUserUpdate, setCurrentUserUpdate } =
    useContext(CurrentUserContext);
  const { communityUpdate, setCommunityUpdate } = useContext(CommunityContext);
  const handleSavePalette = async () => {
    if (!isLoading && isAuthenticated) {
      const response = await fetch("/api/palette/save", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id: palette._id,

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
      setCurrentUserUpdate(!currentUserUpdate);
      setCommunityUpdate(!communityUpdate);
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
          id: palette._id,
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
      setCurrentUserUpdate(!currentUserUpdate);

      setCommunityUpdate(!communityUpdate);
    }
  };
  if (
    palette.public &&
    palette.user !== user.sub &&
    palette.user &&
    !palette.saved
  ) {
    //If palette is in community, created by other user and not saved previously
    return (
      <>
        <ButtonSave handleSavePalette={handleSavePalette} />
        <DropDown />
      </>
    );
  } else if (
    palette.shared !== true &&
    palette.public !== true &&
    palette.user === user.sub &&
    palette.orginial
  ) {
    //If palette is in archive not shared, created by the user
    return (
      <>
        <ButtonShare handleSharePalette={handleSharePalette} />
      </>
    );
  } else {
    return null;
  }
};

export default ModalButton;
