import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { fetchMovies } from "../../actions/movies";

import "./Navbar.css";

function Navbar({handleVertNavExpansion, handleActiveRoute}) {
  const [searchKey, setSearchKey] = useState("");

  const dispatch = useDispatch();

  const search = (e) => {
    e.preventDefault();
    handleActiveRoute("");
    dispatch(fetchMovies(searchKey));
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-start">
          <button className={`mobile-nav`} type="button" onClick={() => handleVertNavExpansion()}>
            <span className={`mobile-nav-inner`} />
          </button>
          <span className="header-logo">MovieBox</span>
        </div>
        <form className="header-searchform" onSubmit={search}>
          <input
            className="header-searchbar"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button className="header-button" type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </button>
        </form>
        <div className="header-user-image">
          <FontAwesomeIcon icon={faCircleUser} size="xl" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
