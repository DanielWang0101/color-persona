import React, { useContext } from "react";
import { CommunityContext } from "../Context/CommunityContext";
import MiniSwatch from "../Archive/MiniSwatch";
import { Image } from "cloudinary-react";
import { RowFlex, Masonry, Card, PaletteName } from "./styled-components";
import { Avatar } from "../Modal/styled-components";
const Community = () => {
  const { feed } = useContext(CommunityContext);
  console.log("🚀 ~ feed", feed);
  return (
    <Masonry
    // width="100%"
    >
      {feed &&
        feed.map((palette) => {
          return (
            <Card>
              {palette.publicId && (
                <Image
                  cloudName="belteshazzarj"
                  publicId={palette.publicId}
                  width="200"
                  height="150"
                  crop="fill"
                  gravity="center"
                  style={{
                    marginBottom: "-45px",
                    zIndex: 1,
                  }}
                />
              )}
              <MiniSwatch palette={palette} />
              <RowFlex>
                <Avatar
                  src={palette.picture}
                  style={{ width: "20px", height: "20px" }}
                />
                <PaletteName>{palette.paletteName}</PaletteName>
              </RowFlex>
            </Card>
          );
        })}
    </Masonry>
  );
};

export default Community;
