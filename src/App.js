import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import VerticalNavbar from "./components/VerticalNavbar/VerticalNavbar";

import useWindowSize from "./hooks/useWindowDimensions";

import "./App.css";

const App = () => {
  const size = useWindowSize();

  const [search, setSearch] = useState("");
  const [activeRoute, setActiveRoute] = useState("Home");
  const [vertNavActive, setVertNavActive] = useState(true);
  const [vertNavExpanded, setVertNavExpanded] = useState(true);

  const handleVertNavExpansion = () => {
    setVertNavExpanded(!vertNavExpanded);
  };

  const handleActiveRoute = (active) => {
    setActiveRoute(active);
  };

  useEffect(() => {
    if (size.width > 1339) {
      setVertNavActive(true);
    } else {
      setVertNavActive(false);
      setVertNavExpanded(false);
    }
  }, [size]);

  return (
    <div className="App">
      <Router basename="/">
        <Navbar
          handleVertNavExpansion={handleVertNavExpansion}
          handleActiveRoute={handleActiveRoute}
          setSearch={setSearch}
        />
        <div
          className={`vertical-navbar-wrapper ${
            vertNavActive
              ? vertNavExpanded
                ? "expanded"
                : "minimized"
              : vertNavExpanded
              ? "expanded"
              : "collapsed"
          }`}
        >
          <VerticalNavbar
            vertNavExpanded={vertNavExpanded}
            handleActiveRoute={handleActiveRoute}
            activeRoute={activeRoute}
            vertNavActive={vertNavActive}
          />
        </div>
        <div className="home-container-wrapper">
          {!vertNavActive && vertNavExpanded ? (
            <div
              className="home-container-layer"
              onClick={() => setVertNavExpanded(false)}
            />
          ) : null}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  vertNavExpanded={vertNavExpanded}
                  vertNavActive={vertNavActive}
                  search={search}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
