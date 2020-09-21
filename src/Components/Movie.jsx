import React from "react";
import "../App.scss";
import { NavLink } from "react-router-dom";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // creating cells in carousel
    return (
      <>
        <div>
          <div className="card">
            <div>
              {/* This image is shown when movie Poster is not available */}
              {this.props.image === null ? (
                <img
                  className="carouselImage"
                  src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                  alt="Card cap"
                />
              ) : (
                // movie poster
                <img
                  className="carouselImage"
                  src={`http://image.tmdb.org/t/p/w185${this.props.image}`}
                  alt="Card cap"
                />
              )}
            </div>
            {/* creating cards with movies */}
            <div className="card-body">
              <h6 className="card-title">
                {/* for set up titles. Name is there because in PopularTvSerie is title called name */}
                {this.props.title} {this.props.name}
              </h6>
            </div>
            <div className="card-content">
              <p>
                {/* Link to movieInfo Component, where are movie details. movieId=movie id. type=every carousel have another url in this place  */}
                <NavLink to={`/${this.props.type}/${this.props.movieId}`}>
                  View Details
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Movie;
