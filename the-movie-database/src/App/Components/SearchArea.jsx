import React from 'react';

import Movie from './Movie';

//movies list
const SearchArea = (props) => {
    return(
    <div >
        
                {/* handlesubmit- dont have it in on change, it should be there automaticly*/}
                
                <form >
                <input onChange={props.handleSubmit}  placeholder="search movie" type="text" className="search-bar"/>
                </form>
                  
                    
                  
            
       
    </div>
    )
}

export default SearchArea;

