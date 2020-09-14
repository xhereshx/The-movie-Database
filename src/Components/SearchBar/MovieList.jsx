import React from "react";
import SearchMovie from "./SearchMovie";
import "../../App.css";

const MovieList = (props) => {
  return (
    <div className="flexbox">
      <div className="row">
        <div>
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

// const MovieList = (props) => {
//   return (
//     <div className="container">
//       {/* <div className="row">
//         <div className="col s12"> */}
//       {props.movies.map((movie, i) => {
//         return (
//           <SearchMovie
//             key={movie.id}
//             viewMovieInfo={props.viewMovieInfo}
//             movieId={movie.id}
//             title={movie.title}
//             overview={movie.overview}
//             image={movie.poster_path}
//             date={movie.release_date}
//           />
//         );
//       })}
//     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default MovieList;
