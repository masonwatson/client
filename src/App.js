import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import VerticalNavbar from "./components/VerticalNavbar/VerticalNavbar";

import "./App.css";

const App = () => {
  const [activeRoute, setActiveRoute] = useState("Home");
  const [vertNavActive, setVertNavActive] = useState(false);
  const [vertNavExpanded, setVertNavExpanded] = useState(false);

  const handleVertNavExpansion = () => {
    setVertNavExpanded(!vertNavExpanded);
  };

  const handleActiveRoute = (active) => {
    setActiveRoute(active);
  };

  useEffect(() => {
    setVertNavActive(true);
    setVertNavExpanded(true);
  }, []);

  return (
    <div className="App">
      <Router basename="/">
        <Navbar
          handleVertNavExpansion={handleVertNavExpansion}
          handleActiveRoute={handleActiveRoute}
        />
        <div
          className={`vertical-navbar-wrapper ${
            vertNavExpanded ? "expanded" : "collapsed"
          }`}
        >
          <VerticalNavbar
            vertNavExpanded={vertNavExpanded}
            handleActiveRoute={handleActiveRoute}
            activeRoute={activeRoute}
          />
        </div>
        <div className="main-view-wrapper">
          <div
            className={`vertical-navbar-placeholder ${
              vertNavExpanded ? "expanded" : "collapsed"
            }`}
          />
          <div
            className={`home-container-wrapper ${
              vertNavExpanded ? "expanded" : "collapsed"
            }`}
          >
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
