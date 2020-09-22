import React from "react";
import "../../App.scss";

// code for search bar
const SearchArea = (props) => {
  return (
    <div className="search_areatwo">
      <section>
        {/* onSubmit call props.handleSubmit, when form is submitted */}
        <form onSubmit={props.handleSubmit} action="">
          <div>
            <input
              placeholder="Search movie"
              type="text"
              className="search_area"
              // is called when value is changed
              onChange={props.handleChange}
            />
          </div>
        </form>
      </section>
      <br />
      <br />
    </div>
  );
};

export default SearchArea;
