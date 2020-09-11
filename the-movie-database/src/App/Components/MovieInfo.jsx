import React, {setState,useState} from 'react';
import ReactDOM from 'react-dom';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

import { FullScreen, useFullScreenHandle } from "react-full-screen";
import '../../App.css';



const MovieInfo = (props) => {
    // movie details code below
    const handle = useFullScreenHandle(); // to full screen 
    const [show, setShow] = useState(false); // states are use for changing button name and for change components
  
    function onToggle() {
      setShow(!show);
    }

    const src ='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'; // hardcoded link to movie trailer

    function both(){
        if(!show){
        onToggle()
        handle.enter()}
        else{
        onToggle()
        } 
    } // putting bouth conditings together 


    
        return ( <div className="container">
        <div className="row" onClick={props.closeMovieInfo} style={{ cursor: "pointer", paddingTop:50}}>
            <i className="fas fa-arrow-left"></i>
            <span style={{marginLeft: 10}}>Go Back</span> 
        </div>
        {/* create go back button */}
        <div className="row">
        <div className="col s12 m8">
            <div className="info-container">
                <h1>{props.currentMovie.title} {props.currentMovie.name}</h1>
                <br></br>
                <p>{props.currentMovie.overview}</p>
                <p><b>Release date:</b> {props.currentMovie.release_date}</p>
                <p><b>Vote average:</b> {props.currentMovie.vote_average}</p>
                {/* infomation about movie above */}
                <button onClick={both} >{show ? 'Stop Trailer' : 'Play Trailer'}</button>
                {/* button to play/stop movie trailer */}
            </div>
        </div>
        <div className="col s12 m4">
        <FullScreen handle={handle}> {show ? 
        //  code for full screen 
          <div className="video" style={{ width: "90%", height:"90%"}}>
              {show && <ShakaPlayer autoPlay controls src={src} /> }
              {/* setting up shakaplayer */}
             </div>
                
                  : <img src={`http://image.tmdb.org/t/p/w342/${props.currentMovie.poster_path}`} alt="Movie poster" style={{width: "25rem", height:"25rem"}} /> }
                  {/* showing trailer of movie, when trailer is played */}
                   </FullScreen>
        </div>

        
        </div>
            
    </div> );
    
}
 
export default MovieInfo;


