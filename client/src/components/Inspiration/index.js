import React, { useContext, useEffect, useState } from "react";
import MiniSwatch from "../Archive/MiniSwatch";

import { CurrentUserContext } from "../Context/CurrentUserContext";
import { InspirationContext } from "../Context/InspirationContext";
import { FlexColumn } from "./styled-components";
import { useAuth0 } from "@auth0/auth0-react";
const Inspiration = () => {
  const { archives, setArchives } = useContext(CurrentUserContext);
  const { gallery } = useContext(InspirationContext);
  return (
    <FlexColumn>
      {gallery &&
        gallery.map((art) => {
          return (
            <div>
              <img src={art.thumb} />
              {art.colors && <MiniSwatch palette={art} />}
            </div>
          );
        })}
    </FlexColumn>
  );
};

export default Inspiration;
