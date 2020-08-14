import React from 'react';
import '../../App.css'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* import './App.css'; */


class PopularTvSeries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
          }
    }

    
  

    componentDidMount(){

        fetch('https://api.themoviedb.org/3/tv/popular?api_key=054382f1b063f38f88579fee1be9f3c9&language=en-US&page=1')
        .then(response => response.json())
        .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.results,
                    
                    
                })
        });
    }

    render() { 
        let settings = {
           
            speed: 1000,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 5,
        
            
          };

        let { isLoaded, items} = this.state;

        if(!isLoaded){
            return <div>Loading...</div>
        }

        else{
                return (
                <div className="container">
                    <h2>Popular TV series</h2>
                    <Slider {...settings}>
                    
                        {items.map(item =>(
                        <div key={item} className="out">
                           <div className="card">
                               <img className="images" src={`http://image.tmdb.org/t/p/w342/${item.poster_path}`}  alt="poster"/>

                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5> 
                           
                           </div>
                           </div>
                        </div>
                        ))}
                        
                        </Slider>
                    
                
                </div>
                    );
        }
    }
}
 
export default PopularTvSeries;
