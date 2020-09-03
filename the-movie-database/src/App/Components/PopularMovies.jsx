import React from 'react';
import '../../App.css'; 

import PopularMoviesDetails from './PopularMoviesDetails';

import SearchArea from './SearchArea';
import MovieInfo from './MovieInfo';


class PopularMovies extends React.Component {
  constructor(){
    super()
    this.state = {
      items: [],
      //totalResults: 0,
      searchTerm: '',
      //currentPage: 1,
      currentMovie: null
    }
    
  }



  handleSubmit = (e) => { 
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=054382f1b063f38f88579fee1be9f3c9&language=en-US&page=1`)
    .then(response => response.json())
    .then(response => {
      this.setState({ items: [...response.results]})
    })
    
    e.preventDefault()
  }



  viewMovieInfo = (id) => {
    let filteredMovie;
    this.state.items.forEach((movie, i) => {
      if(movie.id == id) {
        filteredMovie = movie
      }
    }) 

    this.setState({ currentMovie: filteredMovie })  
  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  }

  render() {
    
    return (
      
      <div>
        
     
      
      {this.state.currentMovie == null ? <div><SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><PopularMoviesDetails viewMovieInfo={this.viewMovieInfo} movies={this.state.items}/></div> : <MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovie} />}
        
    </div>
    );
  }
}

export default PopularMovies;
