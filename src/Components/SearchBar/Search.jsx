import React, { Component } from "react";
import "../../App.scss";
import SearchArea from "./SearchArea";
import MovieList from "./MovieList";
import MovieInfo from "../MovieInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      currentMovie: null,
    };
    this.apiKey = "054382f1b063f38f88579fee1be9f3c9";
  }

  // code to find movie. This is sended to SearchArea
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  // to fetch data, e.preventDefault is there because it should be renderer after inserting movie name.
  handleSubmit = (e) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          movies: [...response.results],
        });
      });
    e.preventDefault();
  };

  // looping through movies, it is sent to MovieList component
  viewMovieInfo = (id) => {
    let filteredMovie;
    this.state.movies.forEach((movie, i) => {
      if (movie.id === id) {
        filteredMovie = movie;
      }
    });

    this.setState({ currentMovie: filteredMovie });
  };
  // for go back from selected movie and set state back to null
  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    return (
      <div>
        {/* show search area and searched movies of information about one selected movie */}
        {this.state.currentMovie === null ? (
          <div>
            {/* for send fetch data and send selected movie */}
            <SearchArea
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            {/* to show list with searched movies. ViewmovieInfo loop through  movies*/}
            <MovieList
              viewMovieInfo={this.viewMovieInfo}
              movies={this.state.movies}
              type={"movie"}
            />
          </div>
        ) : (
          // to show details about one movie. closeMovieInfo close selected movie and go back
          <MovieInfo
            closeMovieInfo={this.closeMovieInfo}
            currentMovie={this.state.currentMovie}
          />
        )}
      </div>
    );
  }
}

export default App;
