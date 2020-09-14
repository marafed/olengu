import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function CheckOut(props) {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async data => {
        var answer = await fetch(
            `/updateprenotazioneconclusa/${props.id_ann}/${localStorage.getItem("token")}`,{ 
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
        <div className="CheckOut">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h2 style={{margin: 1 + 'em', textAlign: "center", color: "white"}}>Inserisci nuova data di check-out</h2><br />
                <div className="row">
                    <div className="col text-center">
                        <input type="date" 
                            placeholder="Data" 
                            name="data"
                            style={{height: 30 + 'px', margin: 1 + 'em', textAlign: "center"}}
                            ref={register()}
                        /><br />
                        <button type="submit" className="btn btn-gradient btn-dashboard">Conferma</button>
                    </div>
                 </div>
            </form>
        </div>
    );
}
export default CheckOut;