import React, { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { getImages } from "../../unsplash/data";
export const InspirationContext = createContext();

const InspirationProvider = ({ children }) => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [gallery, setGallery] = useState(null);
  console.log("🚀 ~ gallery", gallery);
  //   const [currentUserUpdate, setCurrentUserUpdate] = useState(false);

  useEffect(() => {
    // (async () => {
    //   const contentEnriched = await getImages();
    //   setGallery(contentEnriched);
    // })();
    fetch("/api/inspiration")
      .then((res) => res.json())
      .then((result) => setGallery(result.data));
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
  }, []);
  return (
    <InspirationContext.Provider value={{ gallery }}>
      {children}
    </InspirationContext.Provider>
  );
};

export default InspirationProvider;
