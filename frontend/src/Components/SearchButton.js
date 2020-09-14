import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function SearchButton(props) {
    return (                        
        <button onClick={props.submit} id="search-button" className="btn btn-gradient disabled" disabled="disabled" style={{fontSize: 1.5 + 'em'}}>
            Cerca
            <img width="25em" src="img/shapes-and-symbols.svg" style={{marginLeft: 1 + 'em'}} />
        </button>
    );

    if(props.city != "" && props.checkin != "" && props.checkout != "" && props.nospiti != "") {
        return (                        
            <button onClick={props.submit} id="search-button" className="btn btn-gradient disabled" style={{fontSize: 1.5 + 'em'}}>
                Cerca
                <img width="25em" src="img/shapes-and-symbols.svg" style={{marginLeft: 1 + 'em'}} />
            </button>
        );
    }
}

export default SearchButton;