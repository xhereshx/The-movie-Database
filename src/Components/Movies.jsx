import React from "react";
import "../App.css";
import MoviesDetails from "./MoviesDetails";
import SearchArea from "./SearchBar/SearchArea";
import MovieInfo from "./MovieInfo";

class Movies extends React.Component {
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
      `https://api.themoviedb.org/3/${this.props.urlParam}`
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({ items: [...response.results] });
      });
    // function to fetch data
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
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
      <>
        {this.state.currentMovie == null ? (
          <div>
            {/* title stejne jako url */}
            <h1>{this.props.mainTitle}</h1>
            <h1>{this.props.title}</h1>
            {/* <SearchArea
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            /> */}
            <MoviesDetails
              viewMovieInfo={this.viewMovieInfo}
              movies={this.state.items}
              handleSubmit={this.handleSubmit}
            />
          </div>
        ) : (
          <MovieInfo
            closeMovieInfo={this.closeMovieInfo}
            currentMovie={this.state.currentMovie}
          />
        )}
        {/* Showing carousels with movies if movie is not selected. If movie is selected than it is showing details about movie */}
      </>
    );
  }
}

export default Movies;

// class Movies extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       currentMovie: null,
//     };
//   }

//   handleSubmit = () => {
//     fetch(
//       // změnit tady adresu this.props.urlParam
//       `https://api.themoviedb.org/3/${this.props.urlParam}`
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         this.setState({ items: [...response.results] });
//       });
//     // function to fetch data
//   };

//   componentDidMount() {
//     this.handleSubmit();
//   }

//   viewMovieInfo = (id) => {
//     // const filteredMovie = this.state.item.find((movie) => movie.id ===id)
//     let filteredMovie;
//     this.state.items.forEach((movie, i) => {
//       if (movie.id === id) {
//         filteredMovie = movie;
//       } // looping throw popular movies, it is send to PopularMovieDetails component
//     });

//     this.setState({ currentMovie: filteredMovie });
//   };

//   closeMovieInfo = () => {
//     this.setState({ currentMovie: null });
//   }; // for go back from seleceted movie and set state back to null

//   render() {
//     return (
//       <>
//         {this.state.currentMovie == null ? (
//           <div>
//             {/* title stejne jako url */}
//             <h1>{this.props.mainTitle}</h1>
//             <h1>{this.props.title}</h1>
//             {/* <SearchArea /> */}
//             <MoviesDetails
//               viewMovieInfo={this.viewMovieInfo}
//               movies={this.state.items}
//               handleSubmit={this.handleSubmit}
//             />
//           </div>
//         ) : (
//             <MovieInfo
//               closeMovieInfo={this.closeMovieInfo}
//               currentMovie={this.state.currentMovie}
//             />
//           )}
//         {/* Showing carousels with movies if movie is not selected. If movie is selected than it is showing details about movie */}
//       </>
//     );
//   }
// }

// export default Movies;

// // onChange={this.props.handleSubmit()}
