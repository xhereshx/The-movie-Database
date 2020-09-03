import React from 'react';
import '../../App.css'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }

        this.performSearch()
    }

    performSearch(){
        console.log('search test')
    }

    render() { 
        return (<div>
            <input className="search-bar" placeholder="Enter search term"/>
            
        </div>  );
    }
}
 
export default SearchBar;