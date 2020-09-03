import React from 'react';
import '../../App.css'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Switchtest extends React.Component {
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
        return ( <div>
            <h1>xxx</h1>
            <Slider {...settings}>
        {this.props.movies.map(item =>(
            
            <div key={item.id} className="out">
               <div className="card">
                   <img className="images" src={`http://image.tmdb.org/t/p/w342/${item.poster_path}`}  alt="poster"/>
            

                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    {<button onClick={()=>this.handleClick([])}>{this.props.buttonText}</button>}
                    
                    
                   
               </div>
               </div>
               {/* <div>{console.log(item)}</div> */}
            </div>

            
            ))}
      
        </Slider>; 
        </div> );
    }
}
 
export default Switchtest;