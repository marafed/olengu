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

    const onSubmit = async data => {
        var answer = await fetch(
            "http://localhost:3500/api/insertprenotazione", {
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
        <button onSubmit={onSubmit} className="btn btn-gradient btn-dashboard">Termina e paga</button> // da vedere dove mettere le variabili
    );
}

export default BottoneTermina;