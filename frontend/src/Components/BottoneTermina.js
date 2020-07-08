import React from 'react';

function BottoneTermina() {
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