import React from 'react';
import { useForm } from 'react-hook-form';

function SearchResultsPopup() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async data => {
        var answer = await fetch(
            "/api/auth/insertitem",{
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
        <div id="popup-filter" className="insertitem-box">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 checklist-box-col">
                        <h2 style={{marginTop: 0.01 + 'em', textAlign: "center"}}>Info generali</h2>
                        <label htmlFor="titolo" style={{fontWeight: 'bold'}}>Titolo</label><br />
                        <input type="text" 
                            placeholder="Titolo" 
                            name="titolo"
                            ref={register({max: 20,  min: 1, required: true})}
                        /><br />
                        <label htmlFor="description" style={{fontWeight: 'bold'}}>Descrizione</label><br />
                        <textarea
                            placeholder="Descrizione" 
                            name="descrizione"
                            ref={register({max: 100,  min: 1, required: true})}
                        /><br />
                        <label htmlFor="citta" style={{fontWeight: 'bold'}}>Città</label><br />
                        <input type="text" 
                            placeholder="Città" 
                            name="citta"
                            ref={register({max: 20,  min: 1, required: true})}
                        />                        
                    </div> 
                    <div className="col-lg-3 col-md-6 col-sm-12 checklist-box-col">  
                        <h2 style={{marginTop: 0.01 + 'em', textAlign: "center"}}>Servizi e struttura</h2>
                        <input type="checkbox" placeholder="Wifi" name="wifi" ref={register} />
                        <label htmlFor="wifi" style={{fontWeight: 'bold'}}>Wi-fi</label><br/>
                        <input type="checkbox" placeholder="Aria condizionata" name="ariacondizionata" ref={register} />
                        <label htmlFor="Aria condizionata" style={{fontWeight: 'bold'}}>Aria condizionata</label><br/>
                        <input type="checkbox" placeholder="Baby friendly" name="babyfriendly" ref={register} />
                        <label htmlFor="Baby friendly" style={{fontWeight: 'bold'}}>Baby friendly</label><br/>
                        <input type="checkbox" placeholder="Animali domestici ammessi" name="animalidomestici" ref={register} />
                        <label htmlFor="Animali domestici ammessi" style={{fontWeight: 'bold'}}>Animali domestici ammessi</label><br/> 
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 checklist-box-col">
                        <h2 style={{marginTop: 0.01 + 'em', textAlign: "center"}}>Dettagli</h2>
                            <input type="number" placeholder="Prezzo" name="prezzo" ref={register({max: 20, min: 0})} />
                            <label htmlFor="Prezzo" style={{fontWeight: 'bold'}}>€
                                A notte
                            </label><br/>
                            <input style={{marginTop: 1 + 'em'}} name="tipostruttura" type="radio" value="Intero appartamento" ref={register({ required: true })}/>
                            <label htmlFor="Intero appartamento" style={{fontWeight: 'bold'}}>Intero appartamento</label><br />
                            <input name="tipostruttura" type="radio" value="Stanza privata in B&B" ref={register({ required: true })}/>
                            <label htmlFor="Stanza privata in B&B" style={{fontWeight: 'bold'}}>Stanza privata in B&B</label>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 checklist-box-col">   
                        <div style={{padding: 2 + 'em'}}>
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Ospiti" name="nospiti" ref={register({required: true})} />
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Letti singoli" name="nlettisingoli" ref={register} />
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Letti matrimoniali" name="Nnlettimatrimoniali" ref={register} />
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Divano letto" name="ndivanoletto" ref={register} />
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Camere" name="ncamere" ref={register} />
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Bagni" name="nbagni" ref={register} />
                        </div>
                        <button type="submit" className="btn btn-gradient" id="register-host-btn">Applica filtri</button>
                    </div>
                </div>  
            </form> 
        </div>   
    );
}


export default SearchResultsPopup;