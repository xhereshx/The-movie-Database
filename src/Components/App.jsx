import React from "react";
import Movies from "./Movies";
import Search from "./SearchBar/Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../App.scss";
import MovieInfo from "./MovieInfo";
import Nav from "./Nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.apiKey = "054382f1b063f38f88579fee1be9f3c9";
  }
  render() {
    return (
      <>
        {/* To setup router  */}
        <BrowserRouter>
          {/* nav bar will be on every page */}
          <Nav mainTitle="The Movie Database" />
          <Switch>
            {/* All carousels are on main page */}
            <Route path="/" exact>
              <div className="main_header">
                <div>
                  <Movies
                    // urlParam = second half of url Address
                    // title = title of selected movies
                    // type is used down to send proper type of movies to page with details
                    urlParam={`movie/popular?api_key=${this.apiKey}&language=en-US&page=1`}
                    title="Popular Movies"
                    type="movie"
                  />
                </div>
                <Movies
                  urlParam={`tv/popular?api_key=${this.apiKey}&language=en-US&page=1`}
                  title="Popular Tv Series"
                  type="tv"
                />
                <Movies
                  urlParam={`discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751`}
                  title="Family Movies"
                  type="movie"
                />
                <Movies
                  urlParam={`discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`}
                  title="Documentary Movies"
                  type="movie"
                />
              </div>
            </Route>
            {/* MovieInfo is for details about movie /:type/:movieId are used to send data movieInfo. Throw this we can open proper movie. */}
            <Route path="/:type/:movieId" component={MovieInfo} />
            <Route path="/SearchMovie" component={Search} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
