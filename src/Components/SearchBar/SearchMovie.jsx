import React from "react";
import "../../App.css";

const SearchMovie = (props) => {
  return (
    // <div className="flexbox">
    //   <div className="row">
    <div className="column">
      {/* className="row" */}
      <div className="">
        {props.image == null ? (
          <img
            className=""
            src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
            alt="Card image cap"
            style={{
              width: "100%",
              height: 360,
            }}
          />
        ) : (
          <img
            className=""
            src={`http://image.tmdb.org/t/p/w185${props.image}`}
            alt="Card image cap"
            style={{
              width: "100%",
              height: 360,
            }}
          />
        )}
      </div>
      <div class="card-content">
        <p>
          <a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>
            View Details
          </a>
        </p>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default SearchMovie;
// className="card"

// const SearchMovie = (props) => {
//     //let formatDate = props.date.split("-").reverse().join("/");

//     return (
//         <div>
//             <div class="card">
//                 <div>
//                     {props.image == null ? (
//                         <img
//                             className=""
//                             src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
//                             alt="Card image cap"
//                             style={{
//                                 width: "100%",
//                                 height: 360,
//                             }}
//                         />
//                     ) : (
//                             <img
//                                 className=""
//                                 src={`http://image.tmdb.org/t/p/w185${props.image}`}
//                                 alt="Card image cap"
//                                 style={{
//                                     width: "100%",
//                                     height: 360,
//                                 }}
//                             />
//                         )}
//                 </div>
//                 <div class="card-content">
//                     <p>
//                         <a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>
//                             View Details
//             </a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SearchMovie;

// const SearchMovie = (props) => {
//     //let formatDate = props.date.split("-").reverse().join("/");

//     return (
//         <div className="col s12 m6 l3">
//             <div class="card">
//                 <div class="card-image waves-effect waves-block waves-light">
//                     {props.image == null ? (
//                         <img
//                             className=""
//                             src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
//                             alt="Card image cap"
//                             style={{
//                                 width: "100%",
//                                 height: 360,
//                             }}
//                         />
//                     ) : (
//                             <img
//                                 className=""
//                                 src={`http://image.tmdb.org/t/p/w185${props.image}`}
//                                 alt="Card image cap"
//                                 style={{
//                                     width: "100%",
//                                     height: 360,
//                                 }}
//                             />
//                         )}
//                 </div>
//                 <div class="card-content">
//                     <p>
//                         <a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>
//                             View Details
//             </a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SearchMovie;
