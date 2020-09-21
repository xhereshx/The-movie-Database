import React, { useState, useRef, useEffect } from "react";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";
import "../App.scss";
import { Link } from "react-router-dom";

const MovieInfo = ({ match }) => {
  const apiKey = "054382f1b063f38f88579fee1be9f3c9";
  // movie details code below

  // declare new state which is use for changing button name and for show trailer
  const [show, setShow] = useState(false);

  // to change true and false in show
  function onToggle() {
    setShow(!show);
  }

  // for hold value of shakaRef
  const shakaRef = useRef(null);

  // every time when component is render or rerendered function inside of useEffect is called
  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // above comment code is to fix bug in console

  const [item, setItem] = useState({});

  // instead of using componentDidMount and fetch. async is there because I need use await instead of .then
  const fetchItem = async () => {
    const fetchItem = await fetch(
      ` https://api.themoviedb.org/3/${match.params.type}/${match.params.movieId}?api_key=${apiKey}&language=en-US`
    );
    const item = await fetchItem.json();
    setItem(item);
  };
  // every time when component is render or rerender function inside of useEffect is called
  // When show is false this code will acces shakaplayer to start full screen mode. Throw shakaRef(Dom) and ref in render.
  useEffect(() => {
    if (show && shakaRef) {
      shakaRef.current.ui.a.ua[4].a.click();
    }
  }, [show]);
  // hardcoded link to movie trailer
  const src =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <div className="container">
      <div className="row infoContainer">
        {/* link back to main menu. Color is here because it doesn`t work in App.css.  */}
        <Link
          className="fas fa-arrow-left infolink"
          to="/"
          style={{ color: "black" }}
        >
          <span className="infoText">Go Back</span>
        </Link>
      </div>
      <div className="row">
        <div className="col s12 m8">
          <div>
            <h1>
              {item.original_title} {item.name}
            </h1>
            <br></br>
            <p>{item.overview}</p>
            <p>
              <b>Release date:</b> {item.release_date}
              {item.first_air_date}
            </p>
            <p>
              <b>Vote average:</b> {item.vote_average}
            </p>
            {/* button to change movie poster and movie trailer */}
            <button onClick={onToggle}>
              {show ? "Stop Trailer" : "Play Trailer"}
            </button>
          </div>
        </div>
        <div className="col s12 m4">
          {show ? (
            //  code for full screen
            <div className="video">
              {/* setting up shakaplayer */}
              {show && (
                <ShakaPlayer
                  ref={shakaRef}
                  autoPlay
                  controls
                  src={src}
                  width={"100%"}
                />
              )}
            </div>
          ) : (
            //  show movie poster
            <img
              className="Movie_info_image"
              src={`http://image.tmdb.org/t/p/w342/${item.poster_path}`}
              alt="Movie poster"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
