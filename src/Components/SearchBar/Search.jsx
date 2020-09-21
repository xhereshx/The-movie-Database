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

  //
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

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

  viewMovieInfo = (id) => {
    let filteredMovie;
    this.state.movies.forEach((movie, i) => {
      if (movie.id === id) {
        filteredMovie = movie;
      }
    });

    this.setState({ currentMovie: filteredMovie });
  };

  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    return (
      <div>
        {this.state.currentMovie === null ? (
          <div>
            <SearchArea
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            <MovieList
              viewMovieInfo={this.viewMovieInfo}
              movies={this.state.movies}
              type={"movie"}
            />
          </div>
        ) : (
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
