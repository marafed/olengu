import React from 'react';
import { Link } from 'react-router-dom';


function ButtonEnabled() {
    return (                        
        <button id="search-button" className="btn btn-gradient" style={{fontSize: 1.5 + 'em'}}>
            Cerca
            <img width="25em" src="img/shapes-and-symbols.svg" style={{marginLeft: 1 + 'em'}} />
        </button>
    );
}

export default ButtonEnabled;