import React from 'react';
import '../../App.css'; 

import PopularMoviesDetails from './PopularMoviesDetails';

import SearchArea from './SearchArea';
import MovieInfo from './MovieInfo';
import ShakaPlayer from 'shaka-player-react';
import FamilyMovies from './FamilyMovies';
import DocumentaryMovies from './DocumentaryMovies';
import PopularTvSeries from './PopularTvSeries';





class PopularMovies extends React.Component {
  constructor(){
    super()
    this.state = {
      items: [],
      currentMovie: null
    }
    
  }



  handleSubmit = () => { 
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=054382f1b063f38f88579fee1be9f3c9&language=en-US&page=1`)
    .then(response => response.json())
    .then(response => {
      this.setState({ items: [...response.results]})
    })
    // function to fetch data 
    
  }



  viewMovieInfo = (id) => {
    let filteredMovie;
    this.state.items.forEach((movie, i) => {
      if(movie.id == id) {
        filteredMovie = movie
      } // looping throw popular movies, it is send to PopularMovieDetails component
    }) 

    this.setState({ currentMovie: filteredMovie })  
  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  } // for go back from seleceted movie and set state back to null

  isNull = () => {
    let xxx = this.state.currentMovie 
  }

  render() {
    
    return (
      <>
      <div>
        
     
      
      {this.state.currentMovie == null? <div> <h1>The Movie Database</h1> <h1 >Popular Movies</h1><SearchArea handleSubmit={this.handleSubmit} />  <PopularMoviesDetails viewMovieInfo={this.viewMovieInfo}  movies={this.state.items} handleSubmit={this.handleSubmit}/> <PopularTvSeries currentMovie={this.state.currentMovie}/><FamilyMovies/>
        <DocumentaryMovies/> </div>  : <MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovie} />}
      {/* Showing carousels with movies if movie is not selected. If movie is selected than it is showing details about movie */}
    </div>
   
    </>
    );
  }
}

export default PopularMovies;


// onChange={this.props.handleSubmit()}
