import React from 'react';
import '../../App.css'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchArea from './SearchArea';
import PopularMoviesDetails from './PopularMoviesDetails';
import MovieInfo from './MovieInfo';
import PopularMovies from './PopularMovies';



class PopularTvSeries extends React.Component {
  // same as PopularMovie component
    constructor(){
        super()
        this.state = {
          items: [],
          // currentMovieTwo: this.props.currentMovie,
          show: true,
        }
        
      }
    
    
    
      handleSubmit = () => { 
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=054382f1b063f38f88579fee1be9f3c9&language=en-US&page=1`)
        .then(response => response.json())
        .then(response => {
          this.setState({ items: [...response.results]})
        })
        
        
      }
    
    
    
      viewMovieInfo = (id) => {
        let filteredMovie;
        this.state.items.forEach((movie, i) => {
          if(movie.id == id) {
            filteredMovie = movie
          }
        }) 
    
        this.setState({ currentMovieTwo: filteredMovie })  
      }
    
      closeMovieInfo = () => {
        this.setState({ currentMovieTwo: null })
      }

      currentMovieHandler(event){
        this.SetState({
          currentMovieTwo: event.target.value
        });
      }
    // title = name 
      render() {
        
        return (
          <>
          <div>
            {/* still work on. When movie is not selected it should show All carousels with movies. When movie it is selected it should show just movie Detail. Now it is showing movie details and three another carousels */}
         
          
          {this.state.currentMovieTwo == null ? <div><h1>Popular TV Series</h1> <SearchArea handleSubmit={this.handleSubmit} /> <PopularMoviesDetails viewMovieInfo={this.viewMovieInfo} movies={this.state.items} handleSubmit={this.handleSubmit}/> </div>  : <MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovieTwo} />}
          
        </div>
        {/* <div>{console.log(this.props.currentMovie)}</div> */}
        </>
        );
      }
    }
export default PopularTvSeries;

{/* {this.state.currentMovie == null ? <div> <SearchArea handleSubmit={this.handleSubmit} /><PopularMoviesDetails viewMovieInfo={this.viewMovieInfo} movies={this.state.items} handleSubmit={this.handleSubmit}/> </div>  : <MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovie} />} */}
          

// class PopularTvSeries extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoaded: false,
//           }
//     }

    
  

//     componentDidMount(){

//         fetch('https://api.themoviedb.org/3/tv/popular?api_key=054382f1b063f38f88579fee1be9f3c9&language=en-US&page=1')
//         .then(response => response.json())
//         .then(json => {
//                 this.setState({
//                     isLoaded: true,
//                     items: json.results,
                    
                    
//                 })
//         });
//     }

//     render() { 
//         let settings = {
           
//             speed: 1000,
//             arrows: true,
//             slidesToShow: 5,
//             slidesToScroll: 5,
        
            
//           };

//         let { isLoaded, items} = this.state;

//         if(!isLoaded){
//             return <div>Loading...</div>
//         }

//         else{
//                 return (
//                 <div className="container">
//                     <h2>Popular TV series</h2>
//                     <Slider {...settings}>
                    
//                         {items.map(item =>(
//                         <div key={item} className="out">
//                            <div className="card">
//                                <img className="images" src={`http://image.tmdb.org/t/p/w342/${item.poster_path}`}  alt="poster"/>

//                             <div className="card-body">
//                                 <h5 className="card-title">{item.name}</h5> 
                           
//                            </div>
//                            </div>
//                         </div>
//                         ))}
                        
//                         </Slider>
                    
                
//                 </div>
//                     );
//         }
//     }
// }
 
// export default PopularTvSeries;
