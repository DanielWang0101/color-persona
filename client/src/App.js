import React from "react";
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Header/Profile";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import { Main } from "./components/Home/styled-components";
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/explore" />
            <Route path="/libraries" />
          </Routes>
          <Profile />
        </Main>
      </BrowserRouter>
    </>
  );
}

export default App;
