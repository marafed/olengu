import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Payment from './Payment';
 

function SearchItemDetails({ match }) {

    var data_inizio = new Date(localStorage.getItem("data1")); // una cosa simila 
    var data_fine = new Date(localStorage.getItem("data2"));

    const diffTime = Math.abs(data_fine - data_inizio);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
    
    var ospiti = localStorage.getItem("nospiti");
    
    useEffect(() => {
        console.log(item);
        fetchItem();
    }, []);

    const [item, setItem] = useState({
        luogo: "loading",
        n_letti_matr: "loading",
        n_divano_letto: "loading",
        n_bagni: "loading",
        colazione : "loading",
        AC : "loading",
        parcheggio: "loading",
        wifi : "loading",
        animali_domestici_ammessi: "loading", 
        baby_friendly: "loading"
    });

    const fetchItem = async() => {
        const result = await fetch(`/api/getannunciobyid/${match.params.id}`);
        setItem(await result.json());
        console.log(item);
    }

    return(
        <div className="containerFluid">
            <div className="row">
                <div className="col-md-3" style={{margin: 1 + 'em'}}>
                    <img style={{maxWidth: 300 + 'px'}} src="" />
                </div>
                <div className="col-md-3" style={{margin: 2 + 'em', color: "white"}}>
                    <h1 style={{fontWeight: "bold"}}>{item.nome_annuncio}</h1>
                    <h3>{item.luogo}</h3>
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
                                    <h6>{data_inizio}</h6> 
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
                                    <h6>{data_fine}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{marginTop: 1 + 'em'}}>
                                <ul>
                                    <li>Prezzo a notte: {item.prezzo_notte} €</li>
                                    <li>Tassa di soggiorno: {item.tassa_soggiorno} €</li>
                                    <li>Prezzo totale per {diffDays} notti :</li>
                                </ul>
                                <div className="row">
                                    <div className="col  text-center">
                                    <h3>{item.prezzo_notte + item.tassa_soggiorno * diffDays} €</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/Payment" id={match.params.id}>
                        <button className="btn-gradient btn-dashboard">Prenota ora</button>
                    </Link> 
                </div>
            </div>
        </div>
    );
}

export default SearchItemDetails;