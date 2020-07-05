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
                    <div className="checklist-box-col">                            
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
                        <label htmlFor="paese" style={{fontWeight: 'bold'}}>Paese</label><br />
                        <input type="text"
                            placeholder="Paese" 
                            name="paese"
                            ref={register({max: 20,  min: 1, required: true})}
                        /><br />
                        <label htmlFor="regione" style={{fontWeight: 'bold'}}>Regione</label><br />
                        <input type="text" 
                            placeholder="Regione" 
                            name="regione"
                            ref={register({max: 20,  min: 1, required: true})}
                        /><br />
                        <label htmlFor="provincia" style={{fontWeight: 'bold'}}>Provincia</label><br />
                        <input type="text"
                            placeholder="Provincia" 
                            name="provincia"
                            ref={register({max: 20,  min: 1, required: true})}
                        /><br />
                        <label htmlFor="citta" style={{fontWeight: 'bold'}}>Città</label><br />
                        <input type="text" 
                            placeholder="Città" 
                            name="citta"
                            ref={register({max: 20,  min: 1, required: true})}
                        /><br />
                        <label htmlFor="via" style={{fontWeight: 'bold'}}>Via</label><br />
                        <input type="text"
                            placeholder="Via" 
                            name="via"
                            ref={register({max: 30,  min: 1, required: true})}
                        /><br />
                        <label htmlFor="numero" style={{fontWeight: 'bold'}}>Numero</label><br />
                        <input type="text"  
                            placeholder="Numero" 
                            name="numero"
                            ref={register({max: 20,  min: 1, required: true})}
                        /><br />
                        <label htmlFor="numero" style={{fontWeight: 'bold'}}>Attrazioni nei paraggi</label><br />
                        <textarea 
                            placeholder="Attrazioni" 
                            name="attrazioni"
                            ref={register({max: 100,  min: 1, required: true})}
                        /><br />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 checklist-box-col">
                        <h2 style={{marginTop: 0.01 + 'em', textAlign: "center"}}>Servizi e struttura</h2>
                        <input type="checkbox" placeholder="Wifi" name="wifi" ref={register} />
                        <label htmlFor="wifi" style={{fontWeight: 'bold'}}>Wi-fi</label><br/>
                        <input type="checkbox" placeholder="Aria condizionata" name="ariacondizionata" ref={register} />
                        <label htmlFor="Aria condizionata" style={{fontWeight: 'bold'}}>Aria condizionata</label><br/>
                        <input type="checkbox" placeholder="Lavatrice" name="lavatrice" ref={register} />
                        <label htmlFor="Lavatrice" style={{fontWeight: 'bold'}}>Lavatrice</label><br/>
                        <input type="checkbox" placeholder="Baby friendly" name="babyfriendly" ref={register} />
                        <label htmlFor="Baby friendly" style={{fontWeight: 'bold'}}>Baby friendly</label><br/>
                        <input type="checkbox" placeholder="Tv" name="Tv" ref={register} />
                        <label htmlFor="Tv" style={{fontWeight: 'bold'}}>Tv</label><br/>
                        <input type="checkbox" placeholder="Asciugacapelli" name="asciugacapelli" ref={register} />
                        <label htmlFor="Asciugacapelli" style={{fontWeight: 'bold'}}>Asciugacapelli</label><br/>
                        <input type="checkbox" placeholder="Zona lavoro" name="zonalavoro" ref={register} />
                        <label htmlFor="Zona lavoro" style={{fontWeight: 'bold'}}>Zona lavoro</label><br/>
                        <input type="checkbox" placeholder="Animali domestici ammessi" name="animalidomestici" ref={register} />
                        <label htmlFor="Animali domestici ammessi" style={{fontWeight: 'bold'}}>Animali domestici ammessi</label><br/>
                        <input type="checkbox" placeholder="E' consentito fumare" name="fumo" ref={register} />
                        <label htmlFor="E' consentito fumare" style={{fontWeight: 'bold'}}>E' consentito fumare</label><br/>
                        <input type="checkbox" placeholder="Colazione inclusa" name="colazioneinclusa" ref={register} />
                        <label htmlFor="Colazione inclusa" style={{fontWeight: 'bold'}}>Colazione inclusa</label><br/>
                        <input type="checkbox" placeholder="Piscina" name="piscina" ref={register} />
                        <label htmlFor="Piscina" style={{fontWeight: 'bold'}}>Piscina</label><br/>
                        <input type="checkbox" placeholder="Sauna" name="sauna" ref={register} />
                        <label htmlFor="Sauna" style={{fontWeight: 'bold'}}>Sauna</label><br/>
                        <input type="checkbox" placeholder="Idromassaggio" name="idromassaggio" ref={register} />
                        <label htmlFor="Idromassaggio" style={{fontWeight: 'bold'}}>Idromassaggio</label><br/>
                        <input type="checkbox" placeholder="Spa" name="spa" ref={register} />
                        <label htmlFor="Spa" style={{fontWeight: 'bold'}}>Spa</label><br/>
                        <input type="checkbox" placeholder="" name="palestra" ref={register} />
                        <label htmlFor="Palestra" style={{fontWeight: 'bold'}}>Palestra</label><br/>
                        <input type="checkbox" placeholder="Immerso nella natura" name="immerso" ref={register} />
                        <label htmlFor="Immerso nella natura" style={{fontWeight: 'bold'}}>Immerso nella natura</label><br/>
                        <input type="checkbox" placeholder="Vista mozzafiato" name="vista" ref={register} />
                        <label htmlFor="Vista mozzafiato" style={{fontWeight: 'bold'}}>Vista mozzafiato</label><br/>
                        
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 checklist-box-col">
                    <h2 style={{marginTop: 0.01 + 'em', textAlign: "center"}}>Dettagli</h2>
                        <input type="number" placeholder="Prezzo" name="prezzo" ref={register({max: 20, min: 0})} />
                        <label htmlFor="Prezzo" style={{fontWeight: 'bold'}}>€
                            A notte
                        </label><br/>
                        <input style={{marginTop: 1 + 'em'}} name="tipostruttura" type="radio" value="Intero appartamento" ref={register({ required: true })}/>
                        <label htmlFor="Intero appartamento" style={{fontWeight: 'bold'}}>Intero appartamento</label><br />
                        <input name="tipostruttura" type="radio" value="Stanza privata in B&B" ref={register({ required: true })}/>
                        <label htmlFor="Stanza privata in B&B" style={{fontWeight: 'bold'}}>Stanza privata in B&B</label>
                        <div style={{padding: 2 + 'em'}}>
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Ospiti" name="nospiti" ref={register({required: true})} />
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Letti singoli" name="nlettisingoli" ref={register} />
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Letti matrimoniali" name="Nnlettimatrimoniali" ref={register} />
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Divano letto" name="ndivanoletto" ref={register} />
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Camere" name="ncamere" ref={register} />
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Bagni" name="nbagni" ref={register} />
                        </div>
                        <button type="submit" className="btn btn-gradient" id="register-host-btn">Registra appartamento</button>
                    </div>
                </div>
            </form> 
        </div>   
    );
}


export default SearchResultsPopup;