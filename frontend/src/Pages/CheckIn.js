import React, {useState} from 'react';

function CheckIn(props) {    
    const [file, setFile] = useState([]);

    const send = () => {
        var data = {
            "token": localStorage.getItem("token"),
            "prenotazione": props.prenotazione,
            "file": file
        }
        fetch(
            `updateprenotazioneincorso/${props.id_ann}/${localStorage.getItem("token")}`,{
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

    const change = event => {
        setFile(event.target.files[0]);
    };

    return(
        <div className="row">
            <h2 style={{margin: 1 + 'em', textAlign: "center", color: "white"}}>Inserisci foto documenti degli ospiti</h2><br />
                <div className="col text-center">
                    <input onChange={change} type="file" placeholder="file" name="file" style={{height: 30 + 'px', margin: 1 + 'em', textAlign: "center"}} /><br />
                    <button onClick={send} type="submit" className="btn btn-gradient btn-dashboard">Conferma</button>
                </div>
            </div>
    );
}

export default CheckIn;