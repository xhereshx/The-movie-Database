import React from "react";
import "../../App.css";
import PopularMoviesDetails from "./PopularMoviesDetails";
import SearchArea from "./SearchArea";
import MovieInfo from "./MovieInfo";
import FamilyMovies from "./FamilyMovies";
import DocumentaryMovies from "./DocumentaryMovies";
import PopularTvSeries from "./PopularTvSeries";

class PopularMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentMovie: null,
    };
  }

  handleSubmit = () => {
    fetch(
      // změnit tady adresu this.props.urlParam
      `https://api.themoviedb.org/3/movie/popular?api_key=054382f1b063f38f88579fee1be9f3c9&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({ items: [...response.results] });
      });
    // function to fetch data
  };

  componentDidMount() {
    this.handleSubmit();
  }

  viewMovieInfo = (id) => {
    // const filteredMovie = this.state.item.find((movie) => movie.id ===id)
    let filteredMovie;
    this.state.items.forEach((movie, i) => {
      if (movie.id === id) {
        filteredMovie = movie;
      } // looping throw popular movies, it is send to PopularMovieDetails component
    });

    this.setState({ currentMovie: filteredMovie });
  };

  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  }; // for go back from seleceted movie and set state back to null

  render() {
    return (
      <div>
        {this.state.currentMovie == null ? (
          <div>
            {/* title stejne jako url */}
            <h1>The Movie Database</h1> <h1>Popular Movies</h1>
            <SearchArea />
            <PopularMoviesDetails
              viewMovieInfo={this.viewMovieInfo}
              movies={this.state.items}
              handleSubmit={this.handleSubmit}
            />
            <PopularTvSeries currentMovie={this.state.currentMovie} />
            <FamilyMovies />
            <DocumentaryMovies />
          </div>
        ) : (
          <MovieInfo
            closeMovieInfo={this.closeMovieInfo}
            currentMovie={this.state.currentMovie}
          />
        )}
        {/* Showing carousels with movies if movie is not selected. If movie is selected than it is showing details about movie */}
      </div>
    );
  }
}

export default PopularMovies;

// onChange={this.props.handleSubmit()}
