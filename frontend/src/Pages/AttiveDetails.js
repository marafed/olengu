import React, {useState, useEffect} from 'react';

 

function AttiveDetails({ match }) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({
        image: {
            url: ""
        },
        name: "",
        biography: {
            "full-name": ""
        },
        work: {
            occupation: ""
        },
        powerstats: {
            intelligence:"",
            strength: "",
            speed:""
        }
    });

    const fetchItem = async() => {
        const fetchItem = await fetch(
            `https://www.superheroapi.com/api.php/3043826855693933/${match.params.id}`
        );
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
        console.log(item.image.url);
    }

    return(
        <div className="containerFluid">
            <div className="row">
                <div className="col-md-3" style={{margin: 1 + 'em'}}>                  
                    <img style={{maxWidth: 300 + 'px'}} src={item.image.url} />
                </div>
                <div className="col-md-3" style={{margin: 2 + 'em', color: "white"}}>
                    <h1 style={{fontWeight: "bold"}}>{item.name}</h1>
                    <h3>{item.biography["full-name"]}</h3>
                    <p>{item.work.occupation}</p>
                    
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
                                    <h6>{item.powerstats.speed}</h6>
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
                                    <h6>{item.powerstats.speed}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{marginTop: 1 + 'em'}}>
                                <ul>
                                    <li>Prezzo a notte: {item.powerstats.strength} €</li>
                                    <li>Tassa di soggiorno: {item.powerstats.intelligence} €</li>
                                    <li>Prezzo totale per 7 notti:</li>
                                </ul>
                                <div className="row">
                                    <div className="col  text-center">
                                        <h3>{item.powerstats.strength * 7 + item.powerstats.intelligence} €</h3>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <button className="btn-gradient btn-dashboard">Check-In</button>    
                </div>

            </div>
        </div>
    );
}

export default AttiveDetails;