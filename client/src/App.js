import React from "react";
import "./App.css";

import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import Archive from "./components/Archive";
import Community from "./components/Community";
import { Main } from "./components/Home/styled-components";
import ProtectedRoute from "./auth/protected-route";
import Inspiration from "./components/Inspiration";
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/archives" element={<Archive />} />
          <Route exact path="/inspiration" element={<Inspiration />} />
          <Route exact path="/community" element={<Community />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
