import React from "react";
import SearchMovie from "./SearchMovie";
import "../../App.scss";

const MovieList = (props) => {
  return (
    <div className="rowTwo">
      {props.movies.map((movie, i) => {
        return (
          <SearchMovie
            key={movie.id}
            viewMovieInfo={props.viewMovieInfo}
            movieId={movie.id}
            title={movie.title}
            overview={movie.overview}
            image={movie.poster_path}
            date={movie.release_date}
            type={props.type}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
