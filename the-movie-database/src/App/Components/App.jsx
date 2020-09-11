import React from "react";
import PopularMovies from './PopularMovies';
import PopularTvSeries from './PopularTvSeries';
import FamilyMovies from './FamilyMovies';
import DocumentaryMovies from './DocumentaryMovies';
import PopularMoviesDetails from './PopularMoviesDetails';




import '../../App.css';





function App() {

    

  return (
      <>
    <div  className="main_header">
        
        <PopularMovies/>
      
        
        {/* <PopularTvSeries/> */}
        {/* <FamilyMovies/>
        <DocumentaryMovies/> */}
        {/* <PopularMoviesDetails/> */}
        
        
    
         
    </div>
   
    </>
  );
}

export default App;