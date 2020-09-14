import React from "react";
import "../App.css";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // creating cells in carousel
    return (
      <>
        <div className="row s12 m6 l3">
          <div className="card">
            <div>
              {this.props.image == null ? (
                <img
                  className=""
                  src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                  alt="Card cap"
                  style={{ width: "100%", height: 360 }}
                />
              ) : (
                <img
                  className=""
                  src={`http://image.tmdb.org/t/p/w185${this.props.image}`}
                  alt="Card cap"
                  style={{ width: "100%", height: 360 }}
                />
              )}
            </div>
            {/* creating cards with movies */}
            <div className="card-body">
              <h6 className="card-title">
                {this.props.title} {this.props.name}
              </h6>
              {/* for set up titles. Name is there because in PopularTvSerie is title called name */}
            </div>
            <div class="card-content">
              <p>
                <a
                  href="#"
                  onClick={() => this.props.viewMovieInfo(this.props.movieId)}
                >
                  View Details
                </a>
              </p>
              {/* creating button, code is propsed from SearchArea. This button will send you to details about movie */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Movie;
