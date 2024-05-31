// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Ads from "./Ads";
import Login from "./Login";
import Registration from "./Register";
import SubmitAd from "./SubmitAd";
import FooterMe from "./FooterMe";
import { ThemeProvider } from "./ThemeContext";
import Register from "./Register";

const App = () => {
  return (
    <div className="layout">
      <BrowserRouter>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Ads" element={<Ads />} />
            <Route path="/SubmitAd" element={<SubmitAd />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Registration" element={<Register />} />
          </Routes>
          <FooterMe />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
