import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SearchResults from '../Pages/SearchResults'

function Searchbar() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async data => {
        var citta = document.getElementById("lochescion").value
        localStorage.setItem("citta", citta)
    };
    
    return(
        <form>
            <div className="row" id="searchbar">
                <div className="col-lg-3 col-md-6 col-sm-12" id="searchbar-place">
                    <div id="button-place" className="button-search">
                        <p className="secondary-search">Dove andiamo?</p>
                        <input 
                            id="lochescion"
                            type="text" 
                            className="secondary-placeholder"
                            placeholder="Inserisci destinazione"
                            name="location" 
                        
                            ref={register({max: 100, min: 1, required: true})}
                            /> 
                        </div>
                    </div>
                <div className="col-lg-3 col-md-6 col-sm-12" id="searchbar-date">
                    <div id="button-date" className="button-search">
                        <p className="secondary-search">Quando partiamo?</p>
                        <input 
                            type="date"
                            className="secondary-placeholder date-input" 
                            name="data1"
                        />
                        <input 
                            type="date" 
                            className="secondary-placeholder date-input" 
                            name="data2"
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12" id="searchbar-guests">
                    <div id="button-date" className="button-search">
                        <p className="secondary-search">Chi viene con noi?</p>   
                        <input
                            type="number"
                            className="secondary-placeholder"
                            placeholder="Inserisci numero di ospiti"
                            name="guests"
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12" id="cerca">
                    <Link to="/SearchResults/">
                        <button onClick={onSubmit} id="search-button" className="btn btn-gradient" style={{fontSize: 1.5 + 'em'}}>
                            Cerca
                            <img width="25em" src="img/shapes-and-symbols.svg" style={{marginLeft: 1 + 'em'}} />
                        </button>
                    </Link>
                </div>
            </div>
        </form>
        );
    }


export default Searchbar;