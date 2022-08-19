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
      <div className="header-content max-center">
        <h2>MOVIEBOXD</h2>
        <form onSubmit={search}>
          <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Navbar;
