import React from 'react';

<<<<<<< HEAD
function BottoneTermina({ props }) {
    
=======
function BottoneTermina(props) {
    const data = {
        "id_annuncio":  props.id,
        "data_inizio":  localStorage.getItem("data1"),
        "data_fine":    localStorage.getItem("data2"),
        "citta":        localStorage.getItem("citta"),
        "nospiti":      localStorage.getItem("nospiti"),
        "card": {
            "number":   props.state.number,
            "expiry":   props.state.expiry,
            "name":     props.state.name,
            "cvc":      props.state.cvc
        }
    };

>>>>>>> daa2236ca803c9ac968863ad5de61f501d4e3512
    const onSubmit = async data => {
        var answer = await fetch(
            "/api/insertprenotazione", {
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