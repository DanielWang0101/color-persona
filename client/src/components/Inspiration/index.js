import React, { useContext, useEffect, useState } from "react";
import MiniSwatch from "../Archive/MiniSwatch";

import { CurrentUserContext } from "../Context/CurrentUserContext";
import { InspirationContext } from "../Context/InspirationContext";
import { FlexColumn } from "./styled-components";
import { Masonry } from "../Community/styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import Pagination from "./Pagination";
// import Modal from "./InspirationModal";
const Inspiration = () => {
  const { archives, setArchives } = useContext(CurrentUserContext);
  const { gallery, setPage, page } = useContext(InspirationContext);
  return (
    <>
      <Masonry>
        {gallery &&
          gallery.map((art) => {
            return (
              <div>
                <img src={art.thumb} />
                {art.colors && <MiniSwatch palette={art} />}
              </div>
            );
          })}
      </Masonry>
      <Pagination page={page} setPage={setPage} />
    </>
  );
};

export default Inspiration;
