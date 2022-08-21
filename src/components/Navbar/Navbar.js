import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchMovies } from "../../actions/movies";

import "./Navbar.css";

function Navbar() {
  const [searchKey, setSearchKey] = useState("");

  const dispatch = useDispatch();

  const search = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(searchKey));
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <span className="header-logo">MovieBox</span>
        <form className="header-searchform" onSubmit={search}>
          <input className="header-searchbar" type="text" placeholder=" Search" onChange={(e) => setSearchKey(e.target.value)} />
          <button className="header-button" type="submit">Search</button>
        </form>
        <span className="header-user-image">image</span>
      </div>
    </header>
  );
}

export default Navbar;
