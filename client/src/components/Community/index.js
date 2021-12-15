import React, { useContext } from "react";
import { CommunityContext } from "../Context/CommunityContext";
import MiniSwatch from "../Archive/MiniSwatch";
import { Image } from "cloudinary-react";
import { Avatar } from "../Header/styled-components";
const Community = () => {
  const { feed } = useContext(CommunityContext);
  console.log("🚀 ~ feed", feed);
  return (
    <>
      {feed &&
        feed.map((palette) => {
          return (
            <div
            // width="100%"
            >
              {palette.publicId && (
                <Image
                  cloudName="belteshazzarj"
                  publicId={palette.publicId}
                  height="150"
                  crop="scale"
                />
              )}
              <MiniSwatch palette={palette} />
              <Avatar src={palette.picture} />
              <p>{palette.name}</p>
            </div>
          );
        })}
    </>
  );
};

export default Community;
