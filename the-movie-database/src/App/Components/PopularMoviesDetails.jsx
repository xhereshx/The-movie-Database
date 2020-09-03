import React from 'react';
import Movie from './Movie';
import '../../App.css'; 

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class PopularMoviesDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let settings = {
            speed: 1000,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 5,
          };
        return ( 
            <>
            <h1>Poplular Movies</h1>
            <div className="container">  
            <Slider {...settings}>
                
             {/* <div className="row "> 
                <div className="row s12">      */}
                {
                this.props.movies.map((movie, i) => {
                    return (
                        
                        <Movie key={movie.id} viewMovieInfo={this.props.viewMovieInfo} movieId={movie.id} title={movie.title} overview={movie.overview} image={movie.poster_path} date={movie.release_date} />                
                    )
                })
                }
                
                {/* </div>
             </div>  */}
            </Slider>  
        </div>
        </>
            // <div ><p>test</p>
            //     <div >
            // {
    
            //     // this.props.movies ? 
            //     this.props.movies.map((movie, i) => {
            //         return (
            //             <>
                        
            //             {/* <ul>
            //                 <li></li>
            //             </ul> */}
                       
            //             <Movie key={i} viewMovieInfo={this.props.viewMovieInfo} movieId={movie.id}  image={movie.poster_path} title={movie.title}/>
            //             {/* {console.log(this.props.movies)} */}
                        
            //             </>
            //         )})
            //     // : "Loading..."
            // }
            //       </div>
            // </div>
             );
    }
}
 
 export default PopularMoviesDetails;
