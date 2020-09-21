import React from "react";
import Movie from "./Movie";
import "../App.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MediaQuery from "react-responsive";

class MoviesDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // slider settings, depence on display width
    let settings320px = {
      speed: 1000,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    let settings720px = {
      speed: 1000,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    let settings1024px = {
      speed: 1000,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 5,
    };

    return (
      <>
        <div className="container">
          {/* MediaQuery = make display responsive. Slider = make Carousel. Movie = cells in carousel  */}
          <MediaQuery minDeviceWidth={1} maxDeviceWidth={719}>
            <Slider {...settings320px}>
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
                    type={this.props.type}
                  />
                );
              })}
            </Slider>
          </MediaQuery>
          <MediaQuery minDeviceWidth={720} maxDeviceWidth={1023}>
            <Slider {...settings720px}>
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
                    type={this.props.type}
                  />
                );
              })}
            </Slider>
          </MediaQuery>
          <MediaQuery minDeviceWidth={1024}>
            <Slider {...settings1024px}>
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
                    type={this.props.type}
                  />
                );
              })}
            </Slider>
          </MediaQuery>
        </div>
      </>
    );
  }
}

export default MoviesDetails;
