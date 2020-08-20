/* import React from 'react'; */
import React from "react";
import PopularMovies from './PopularMovies';
/* import Slider from './Carousel'; */

import PopularTvSeries from './PopularTvSeries';
import FamilyMovies from './FamilyMovies';
import DocumentaryMovies from './DocumentaryMovies';
import PopularMoviesDetails from './PopularMoviesDetails';


import '../../App.css';




function App() {

    

  return (
      <>
    <div  className="main_header">
        <h1>The Movie Database</h1>
        <PopularMovies/>
        <PopularTvSeries/>
        <FamilyMovies/>
        <DocumentaryMovies/>
        <PopularMoviesDetails/>
        
        
    
         
    </div>
   
    </>
  );
}

export default App;