import React from "react";
import "../App.scss";
import MoviesDetails from "./MoviesDetails";
import MovieInfo from "./MovieInfo";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentMovie: null,
    };
  }
  // function to fetch data
  handleSubmit = () => {
    fetch(`https://api.themoviedb.org/3/${this.props.urlParam}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ movies: [...response.results] });
      });
  };

  // to fullfill carousels with data after render
  componentDidMount() {
    this.handleSubmit();
  }

  // looping throw movies, it is send to MovieDetails component
  viewMovieInfo = (id) => {
    let filteredMovie;
    this.state.movies.forEach((movie, i) => {
      if (movie.id === id) {
        filteredMovie = movie;
      }
    });

    this.setState({ currentMovie: filteredMovie });
  };

  // for go back from seleceted movie and set state back to null
  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    return (
      <>
        {/* Showing carousels with movies if movie is not selected. If movie is selected than it is showing details about movie */}
        {this.state.currentMovie === null ? (
          <div>
            <br />
            <h2>{this.props.title}</h2>
            {/* viewMovieInfo,movies,handleSubmit are sending data about movies to MovieDetails component.
            type sending type which is nessesary for MovieInfo Component */}
            <MoviesDetails
              viewMovieInfo={this.viewMovieInfo}
              movies={this.state.movies}
              handleSubmit={this.handleSubmit}
              type={this.props.type}
            />
          </div>
        ) : (
          // code here is to find if is some movie is selected or not
          <MovieInfo
            closeMovieInfo={this.closeMovieInfo}
            currentMovie={this.state.currentMovie}
          />
        )}
      </>
    );
  }
}

export default Movies;
