import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SearchResults from '../Pages/SearchResults'

function Searchbar() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async data => {
        var answer = await fetch(
            "http://localhost:8080",{ //questo è sbaliato
                method: "POST", 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        );
        console.log(data);   
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row" id="searchbar">
                <div className="col-lg-3 col-md-6 col-sm-12" id="searchbar-place">
                    <div id="button-place" className="button-search">
                        <p className="secondary-search">Dove andiamo?</p>
                        <input 
                            type="text" 
                            className="secondary-placeholder"
                            placeholder="Inserisci destinazione"
                            name="location" 
                            onLoad={`loadLocations()`} 
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
                            ref={register({required: true})}
                        />
                        <input 
                            type="date" 
                            className="secondary-placeholder date-input" 
                            name="data2"
                            ref={register({required: true})}
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
                            ref={register({max: 15, min: 1, required: true})}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12" id="cerca">
                    <Link to="/SearchResults/">
                        <button id="search-button" className="btn btn-gradient" style={{fontSize: 1.5 + 'em'}}>
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