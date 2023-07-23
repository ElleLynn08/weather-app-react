import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form" id="search-form">
        <input
          className="form-control"
          type="search"
          placeholder="Enter a city. . . "
          aria-label="Search"
          id="city-input"
          autoComplete="off"
        />
        <button className="btn btn-primary my-2 my-sm-0 mr-2" type="submit">
          Search
        </button>
        <button
          className="btn btn-primary my-2 my-sm-0"
          type="button"
          id="geolocation"
        >
          Current Location
        </button>
      </form>
    </div>
  );
}

