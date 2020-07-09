import React, {useState, useEffect} from 'react';


function InCorsoDetails({ match }) {

    
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({
        image: {
            url: ""
        },
        nome_annuncio: "",
        luogo: "",
        via: "",
        descrizione: "",
        prezzoanotte: "",
        tasseanotte:"",
        data_inizio:"",
        data_fine:""
    });
    
    var diffDays;

    const fetchItem = async() => {
        const fetchItem = await fetch(
            `https://localhost/api/updateprenotazione${match.params.id}`
        );
        const item = await fetchItem.json();
        setItem(item);

        var data_inizio = new Date(item.data_inizio) // una cosa simila 
        var data_fine = new Date(item.data_fine)
    
        const diffTime = Math.abs(data_fine - data_inizio);
        diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
    }

    return(
        <div className="containerFluid">
            <div className="row">
                <div className="col-md-3" style={{margin: 1 + 'em'}}>                  
                    <img style={{maxWidth: 300 + 'px'}} src={item.image.url} />
                </div>
                <div className="col-md-3" style={{margin: 2 + 'em', color: "white"}}>
                    <h1 style={{fontWeight: "bold"}}>{item.nome_annuncio}</h1>
                    <h3>{item.luogo}</h3>
                    <p>{item.descrizione}</p>
                    
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
                                    <h6>{item.data_inizio}</h6>
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
                                    <h6>{item.data_fine}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{marginTop: 1 + 'em'}}>
                                <ul>
                                    <li>Prezzo a notte: {item.prezzoanotte} €</li>
                                    <li>Tassa di soggiorno: {item.tasseanotte} €</li>
                                    <li>Prezzo totale per {diffDays} notti:</li>
                                </ul>
                                <div className="row">
                                    <div className="col  text-center">
                                        <h3>{item.prezzoanotte + item.tasseanotte * diffDays} €</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn-gradient btn-dashboard">Check-Out</button>    
                </div>

            </div>
        </div>
    );
}

export default InCorsoDetails;