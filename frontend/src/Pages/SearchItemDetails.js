import React, {useState, useEffect} from 'react';
import { Link  } from 'react-router-dom';
import  { Redirect } from 'react-router-dom' 
import { type } from 'jquery';

function SearchItemDetails({ match }) {

    const [item, setItem] = useState({});
    const [host, setHost] = useState("")

    useEffect(() => {
        fetchItem();
    }, []);

    var data_inizio = localStorage.getItem("data1");
    var data_fine = localStorage.getItem("data2");

    var date = Date.parse(data_inizio);
    var dateF = Date.parse(data_fine);

    const diffTime = Math.abs(date - dateF);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    var ospiti = localStorage.getItem("nospiti");

    localStorage.setItem('id_annuncio',match.params.id_ann);

    const fetchItem = async () => {
        const result = await fetch(`http://localhost:3500/api/getannuncio/${match.params.id_ann}`)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            setItem(data);
        })

        const hostQuery = await fetch(`http://localhost:3500/api/gethostbyannuncioid/${localStorage.getItem("id_annuncio")}`)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            setHost(data);
            localStorage.setItem("id_host",data.host);
        })

    }

    var totale = (item.prezzo_notte + item.tassa_soggiorno) * diffDays;
    localStorage.setItem('totale_pagato',totale);

    const fetchUserId = async () => {
        if(localStorage.getItem("token") == null) {
            alert("Devi aver effettuato il login per effettuare una prenotazione")
        }
        const result = await fetch(`http://localhost:3500/api/getidusr/${localStorage.getItem('email')}`);
        const item = await result.json();
        localStorage.setItem('id_usr',item.id_usr);
        var payload = {
            "ref_id_ann": localStorage.getItem("id_annuncio"),
            "checkin": localStorage.getItem("data1"),
            "checkout": localStorage.getItem("data2"),
            "stato": "sospeso",
            "tot_pagato": localStorage.getItem("totale_pagato"),
            "id_usr": localStorage.getItem("id_usr"),
            "host": localStorage.getItem("id_host")
        }
        const query = await fetch(
            `http://localhost:3500/api/insertprenotazione/`,
            {
                method: "POST",
                body: JSON.stringify(payload),
                mode:'cors',
                cache: 'no-cache',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json' 
                }
            })
            .then(
                    
                res => {
                if (!res.ok) {
                    const error = new Error(res.error);
                    throw error;
                }else{
                    return res.json()
                }
            })
            .then(json => {
                console.log(json);
            })
            .catch(err => {
                console.error(err);
                alert("Prenotazione effettuata")
                alert('Errore: per favore riprova');
            });
    }

    var notte
    if(diffDays > 1) {
        notte = "notti"
    } else {
        notte = "notte"
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
                        <p>{item.colazione} Colazione</p> 
                        <p>{item.AC} Aria Condizionata</p> 
                        <p>{item.parcheggio} Parcheggio</p> 
                        <p>{item.wifi} Wifi</p> 
                        <p>{item.animali_domestici_ammessi} Animali domestici ammessi</p> 
                        <p>{item.baby_friendly} Baby-friendly</p> 
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
                                    <strong>{""+data_inizio}</strong> 
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
                                    <strong>{""+data_fine}</strong>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{marginTop: 1 + 'em'}}>
                                <ul>
                                    <li>Prezzo a notte: {item.prezzo_notte} €</li>
                                    <li>Tassa di soggiorno: {item.tassa_soggiorno} €</li>
                                    <li>Prezzo totale per {diffDays} {notte}: <strong>{(item.prezzo_notte + item.tassa_soggiorno) * diffDays}€</strong></li>
                                </ul>
                                <div className="row">
                                    <div className="col  text-center">
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/Payment" id={match.params.id_ann}>
                        <button className="btn-gradient btn-dashboard" onClick={fetchUserId}>Prenota ora</button>
                    </Link> 
                </div>
            </div>
        </div>
    );
}

export default SearchItemDetails;