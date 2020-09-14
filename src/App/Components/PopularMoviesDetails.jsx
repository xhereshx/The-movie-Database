import React from "react";
import Movie from "./Movie";
import "../../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class PopularMoviesDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let settings = {
      speed: 1000,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 5,
    }; // slider settings
    return (
      <>
        <div className="container">
          <Slider {...settings}>
            {this.props.movies.map((movie, i) => {
              return (
                <Movie
                  key={movie.id}
                  viewMovieInfo={this.props.viewMovieInfo}
                  movieId={movie.id}
                  title={movie.title}
                  overview={movie.overview}
                  image={movie.poster_path}
                  date={movie.release_date}
                  vote={movie.vote_average}
                  name={movie.name}
                />
              );
            })}
          </Slider>
        </div>
      </>
    );
  }
}

export default PopularMoviesDetails;
