import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./VerticalNavbar.css";

function VerticalNavbar({ vertNavExpanded, handleActiveRoute, activeRoute }) {
  return (
    <div className="vertical-navbar-container">
      <div className="vertical-navbar-content">
        <ul className="vertical-navbar-list">
          <li
            className={`${activeRoute === "Home" ? "active" : "inactive"}`}
            onClick={() => handleActiveRoute("Home")}
          >
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
          </li>
          <li
            className={`${activeRoute === "Explore" ? "active" : "inactive"}`}
            onClick={() => handleActiveRoute("Explore")}
          >
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
          </li>
          <li
            className={`${
              activeRoute === "Liked Movies" ? "active" : "inactive"
            }`}
            onClick={() => handleActiveRoute("Liked Movies")}
          >
            <div className="vertical-navbar-list-item">
              <div className="fa-icon">
                <FontAwesomeIcon icon={faThumbsUp} size="xl" />
              </div>
              <span
                className={`list-item-text ${
                  vertNavExpanded ? "visible" : "invisible"
                }`}
              >
                Liked Movies
              </span>
            </div>
          </li>
          <li
            className={`${activeRoute === "Profile" ? "active" : "inactive"}`}
            onClick={() => handleActiveRoute("Profile")}
          >
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
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VerticalNavbar;
