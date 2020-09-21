import React from "react";
import "../../App.scss";
import { NavLink } from "react-router-dom";

const SearchMovie = (props) => {
  return (
    <div className="column">
      <div>
        {props.image === null ? (
          <img
            className="no_picture_block"
            src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
            alt="Movie poster"
          />
        ) : (
          <img
            className="block"
            src={`http://image.tmdb.org/t/p/w185${props.image}`}
            alt="Movie poster"
          />
        )}
      </div>
      <div className="card-content">
        <p>
          <NavLink to={`/${props.type}/${props.movieId}`}>View Details</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SearchMovie;
