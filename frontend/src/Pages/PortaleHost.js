import React, {useState, useEffect, useReducer} from 'react';
import { Link } from 'react-router-dom';
import FetchGuadagno from '../Utils/FetchGuadagno';

function PortaleHost() {
    return(
        <div>
           <div className="containerFluid">
                <div className="row" id="insertitem-box">
                    <div className="col-lg-6 col-sm-12 user-card" style={{display: "inlineBlock"}}>
                        <h3>Ciao! Il tuo saldo attuale è di:</h3>
                        <FetchGuadagno /><h3>€</h3>
                    </div>
                <div className="col-lg-6 col-sm-12">
                    <Link to="/MyAnnunci">
                        <button className="btn-gradient btn-dashboard">I miei annunci</button>
                    </Link>
                    <Link to="/ShowBooksHost">  
                        <button className="btn-gradient btn-dashboard">Le mie prenotazioni</button>
                    </Link> 
                </div>
            </div>
        </div>
    </div>
    );
}

export default PortaleHost;