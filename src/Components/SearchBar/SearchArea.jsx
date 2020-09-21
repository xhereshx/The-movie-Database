import React from "react";
import "../../App.scss";

const SearchArea = (props) => {
  return (
    <div className="search_areatwo">
      <section>
        <form onSubmit={props.handleSubmit} action="">
          <div>
            <input
              placeholder="Search movie"
              type="text"
              className="search_area"
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
