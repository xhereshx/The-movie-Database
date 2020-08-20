import React from 'react';
/*import PopularMovies from 'PopularMovies'; */


class PopularMoviesDetails extends React.Component {
   
    render() { 
        console.log(this.props.test);
        return (<div>
            <p>{this.props.test}</p>
            <p>123</p>
            </div>  );
    }
}
 
export default PopularMoviesDetails;