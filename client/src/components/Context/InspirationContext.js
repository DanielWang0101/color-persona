import React, { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { createApi } from "unsplash-js";
// import { getImages } from "../../unsplash/data";
export const InspirationContext = createContext();
const { REACT_APP_UNSPLASH_ACCESS_KEY } = process.env;

const unsplash = createApi({
  accessKey: REACT_APP_UNSPLASH_ACCESS_KEY,
  // apiUrl: "http://localhost:8000/unsplash-proxy",
});
const InspirationProvider = ({ children }) => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [gallery, setGallery] = useState(null);
  const [page, setPage] = useState(1);
  //   const [currentUserUpdate, setCurrentUserUpdate] = useState(false);

  useEffect(() => {
    (async () => {
      const resp = await unsplash.search.getPhotos({
        query: "graphic art",
        page: page,
        perPage: 15,
        // color: 'green',
        // orientation: 'portrait',
      });
      const feed = resp.response;
      // extract total and results array from response
      const { total, results } = feed;
      const images = results.map((result) => {
        return result.urls.regular;
      });

      const imagesThumbs = results.map((result) => {
        return result.urls.thumb;
      });

      // let contentEnriched = { colors: [], thumb: "" };
      let contentEnriched = [];

      for (let i = 0; i < images.length; i++) {
        let output = { colors: [], thumb: "", regular: "" };
        let imageUrl = images[i];
        let thumbnails = imagesThumbs[i];
        output = { ...output, ["thumb"]: thumbnails, ["regular"]: imageUrl };
        contentEnriched.push(output);
      }
      setGallery(contentEnriched);
    })();
    // fetch("/api/inspiration")
    //   .then((res) => res.json())
    //   .then((result) => setGallery(result.data));
    // if (!isAuthenticated) {
    //   setArchives([
    //     {
    //       _id: "My Archive",
    //     },
    //   ]);
    // } else if (!isLoading) {
    //   fetch(`/api/archives/${user.sub}`)
    //     .then((res) => res.json())
    //     .then((result) => setArchives(result.data));
    // }
  }, [page]);
  return (
    <InspirationContext.Provider value={{ gallery, setPage }}>
      {children}
    </InspirationContext.Provider>
  );
};

export default InspirationProvider;
