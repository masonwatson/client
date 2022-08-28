import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faThumbsUp,
  faUser,
  faHippo,
  faWindowMaximize

} from "@fortawesome/free-solid-svg-icons";
import {
 faGithub
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import "./VerticalNavbar.css";

function VerticalNavbar({ vertNavExpanded, handleActiveRoute, activeRoute }) {
  return (
    <div className="vertical-navbar-container">
      <div className="vertical-navbar-content">
        <ul className="vertical-navbar-list">
          <Link
            className="router-link"
            to="/"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li
              className={`${activeRoute === "Home" ? "active" : "inactive"}`}
              onClick={() => handleActiveRoute("Home")}
            >
              <div className="v-li-wrapper">
                <div className="vertical-navbar-list-item">
                  <div className="fa-icon">
                    <FontAwesomeIcon icon={faHouse} size="xl" />
                  </div>
                  <span
                    className={`list-item-text ${
                      vertNavExpanded ? "visible" : "invisible"
                    }`}
                  >
                    Home
                  </span>
                </div>
                <div className="li-bar-wrapper">
                  <div
                    className={`li-bar ${
                      activeRoute === "Home" ? "active" : "inactive"
                    }`}
                  />
                </div>
              </div>
            </li>
          </Link>
          <Link
            className="router-link"
            to="/explore"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li
              className={`${activeRoute === "Explore" ? "active" : "inactive"}`}
              onClick={() => handleActiveRoute("Explore")}
            >
              <div className="v-li-wrapper">
                <div className="vertical-navbar-list-item">
                  <div className="fa-icon">
                    <FontAwesomeIcon icon={faCompass} size="xl" />
                  </div>
                  <span
                    className={`list-item-text ${
                      vertNavExpanded ? "visible" : "invisible"
                    }`}
                  >
                    Explore
                  </span>
                </div>
                <div className="li-bar-wrapper">
                  <div
                    className={`li-bar ${
                      activeRoute === "Explore" ? "active" : "inactive"
                    }`}
                  />
                </div>
              </div>
            </li>
          </Link>
          <Link
            className="router-link"
            to="/likes"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li
              className={`${
                activeRoute === "Liked Movies" ? "active" : "inactive"
              }`}
              onClick={() => handleActiveRoute("Liked Movies")}
            >
              <div className="v-li-wrapper">
                <div className="vertical-navbar-list-item">
                  <div className="fa-icon">
                    <FontAwesomeIcon icon={faThumbsUp} size="xl" />
                  </div>
                  <span
                    className={`list-item-text ${
                      vertNavExpanded ? "visible" : "invisible"
                    }`}
                  >
                    Likes
                  </span>
                </div>
                <div className="li-bar-wrapper">
                  <div
                    className={`li-bar ${
                      activeRoute === "Liked Movies" ? "active" : "inactive"
                    }`}
                  />
                </div>
              </div>
            </li>
          </Link>
          <Link
            className="router-link"
            to="/profile"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li
              className={`${activeRoute === "Profile" ? "active" : "inactive"}`}
              onClick={() => handleActiveRoute("Profile")}
            >
              <div className="v-li-wrapper">
                <div className="vertical-navbar-list-item">
                  <div className="fa-icon">
                    <FontAwesomeIcon icon={faUser} size="xl" />
                  </div>
                  <span
                    className={`list-item-text ${
                      vertNavExpanded ? "visible" : "invisible"
                    }`}
                  >
                    Profile
                  </span>
                </div>
                <div className="li-bar-wrapper">
                  <div
                    className={`li-bar ${
                      activeRoute === "Profile" ? "active" : "inactive"
                    }`}
                  />
                </div>
              </div>
            </li>
          </Link>
        </ul>
        <div className="vertical-navbar-links">
          <div className={`box ${vertNavExpanded ? "expanded" : "collapsed"}`}>
            <a className="vnl-icon" href="https://github.com/masonwatson/letterboxd-clone" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            <a className="vnl-icon" href="https://masonxwatson.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="vnl-icon" icon={faWindowMaximize} size="xl" />
            </a>
            <a className="vnl-icon" href="https://github.com/masonwatson/letterboxd-clone" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="vnl-icon" icon={faHippo} size="xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalNavbar;
