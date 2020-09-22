import React from "react";
import SearchMovie from "./SearchMovie";
import "../../App.scss";

// It is to loop through movies and send information about every movie to the SearchMovie. Secondly to start flexbox with movies photos.
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
