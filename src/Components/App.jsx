import React from "react";
import Movies from "./Movies";
import Search from "./SearchBar/Search";

import "../App.css";

function App() {
  return (
    <>
      <div className="main_header">
        <div>
          {/* <SearchArea /> */}
          <Search />
          <Movies
            urlParam="movie/popular?api_key=054382f1b063f38f88579fee1be9f3c9&language=en-US&page=1"
            title="Popular Movies"
            mainTitle="The Movie Database"
          />
        </div>

        <Movies
          urlParam="tv/popular?api_key=054382f1b063f38f88579fee1be9f3c9&language=en-US&page=1"
          title="Popular Tv Series"
        />
        <Movies
          urlParam="discover/movie?api_key=054382f1b063f38f88579fee1be9f3c9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751"
          title="Family Movies"
        />

        <Movies
          urlParam="discover/movie?api_key=054382f1b063f38f88579fee1be9f3c9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99"
          title="Documentary Movies"
        />
      </div>
    </>
  );
}

export default App;
