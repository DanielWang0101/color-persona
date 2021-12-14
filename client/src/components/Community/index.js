import React, { useContext } from "react";
import { CommunityContext } from "../Context/CommunityContext";
import MiniSwatch from "../Archive/MiniSwatch";
import { Avatar } from "../Header/styled-components";
const Community = () => {
  const { feed } = useContext(CommunityContext);
  console.log("🚀 ~ feed", feed);
  return (
    <>
      {feed &&
        feed.map((art) => {
          return (
            <div
            // width="100%"
            >
              <img src={art.thumb} />
              <MiniSwatch palette={art} />
              <Avatar src={art.picture} />
              <p>{art.name}</p>
            </div>
          );
        })}
    </>
  );
};

export default Community;
