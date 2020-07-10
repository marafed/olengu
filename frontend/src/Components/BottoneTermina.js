import React from 'react';

function BottoneTermina(props) {
    const data = {
        "id_ann":  props.state.id,
        "checkin":  localStorage.getItem("data1"),
        "checkout":    localStorage.getItem("data2"),
        "citta":        localStorage.getItem("citta"),
        "nospiti":      localStorage.getItem("nospiti"),
        "card": {
            "number":   props.state.number,
            "expiry":   props.state.expiry,
            "name":     props.state.name,
            "cvc":      props.state.cvc
        }
    };
 
    return(
        <input type="submit" className="btn btn-gradient btn-dashboard">Termina e paga</input> // da vedere dove mettere le variabili
    );
}

export default BottoneTermina;