import React, { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { createApi } from "unsplash-js";
// import { getImages } from "../../unsplash/data";
export const CommunityContext = createContext();

const CommunityProvider = ({ children }) => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [feed, setFeed] = useState(null);
  const [communityUpdate, setCommunityUpdate] = useState(false);
  //   const [currentUserUpdate, setCurrentUserUpdate] = useState(false);

  useEffect(() => {
    fetch("/api/community")
      .then((res) => res.json())
      .then((result) => setFeed(result.data));
  }, [communityUpdate]);
  return (
    <CommunityContext.Provider
      value={{ feed, communityUpdate, setCommunityUpdate }}
    >
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityProvider;
