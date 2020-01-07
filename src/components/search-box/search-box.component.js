import React from "react";
import "./search-box.styles.css";

function SearchBox({ placeholder, handleChange, query }) {
  return (
    // <div className="list-contacts-top">
    <input
      className="search-contacts"
      type="text"
      value={query}
      placeholder={placeholder}
      onChange={handleChange}
    />
    // </div>
  );
}

export default SearchBox;

// old input box
// {
//   /* <input
// className="search"
// type="search"
// placeholder={placeholder}
// onChange={handleChange}
// /> */
// }
