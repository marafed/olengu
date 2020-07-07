import React from 'react';
import { Link } from 'react-router-dom';
import Payment from './Payment';
 

function SearchItemDetails({ item }) {

    return(
        <div className="containerFluid">
            <div className="row">
                <div className="col-md-3" style={{margin: 1 + 'em'}}>                  
                    <img style={{maxWidth: 300 + 'px'}} src={item.image.url} />
                </div>
                <div className="col-md-3" style={{margin: 2 + 'em', color: "white"}}>
                    <h1 style={{fontWeight: "bold"}}>{item.nome_annuncio}</h1>
                    <h3>{item.luogo["full-name"]}</h3>
                    <p>{item.descrizione}</p>
                    <p>{item.via}</p>
                    <div>
                        <h2>Servizi e Specifiche</h2>
                        
                        <p>{item.n_letti_matr} Letti matrimoniali</p>
                        <p>{item.n_divano_letto} Divani letto</p>
                        <p>{item.n_bagni} Bagni</p> 
                        <p>{item.colazione}Colazione</p> 
                        <p>{item.AC}Aria Condizionata</p> 
                        <p>{item.parcheggio}Parcheggio</p> 
                        <p>{item.wifi}Wifi</p> 
                        <p>{item.animali_domestici_ammessi}Animali domestici ammessi</p> 
                        <p>{item.baby_friendly}Baby-friendly</p> 
                    </div>
                </div>
                <div className="col-md-4 searchitem-card">
                    <div className="row">
                        <div className="col text-center">
                            <h2>Riepilogo</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="row">
                                <div class="col">
                                    <h5>Check-In:</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h6>{item.STORAGE}</h6> 
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="row">
                                <div class="col">
                                    <h5>Check-Out:</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h6>{item.descrizione}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{marginTop: 1 + 'em'}}>
                                <ul>
                                    <li>Prezzo a notte: {item.prezzo_notte} €</li>
                                    <li>Tassa di soggiorno: {item.tassa_soggiorno} €</li>
                                    <li>Prezzo totale per 7 notti :</li>
                                </ul>
                                <div className="row">
                                    <div className="col  text-center">
                                        <h3>{item.prezzo_notte* 7 + item.tassa_soggiorno*7} €</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/Payment"> 
                        <button className="btn-gradient btn-dashboard">Prenota ora</button>    
                    </Link> 
                </div>
            </div>
        </div>
    );
}

export default SearchItemDetails;