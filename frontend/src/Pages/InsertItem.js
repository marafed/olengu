import React, { Component,  useState} from 'react';
import CountersItem from '../Components/CountersItem'
import InsertItemChecklist from '../Components/InsertItemChecklist'

function submit() {

}

function update() {

}

function InsertItem() {
    return(
        <div className="InsertItem container-fluid">
            <div className="row" id="insertitem-box">
                <form onSubmit={submit} id="register-form" noValidate>
                    <div className="col-lg-4 col-md-6 col-sm-12 checklist-box-col">
                        <h2 style={{marginTop: 0.01 + 'em', textAlign: "center"}}> Info generali </h2>
                        <div className="form-group">
                            <label htmlFor="titolo" style={{fontWeight: 'bold'}}>Titolo</label>
                            <input type="text" 
                                className="form-control" 
                                id="title-form" 
                                placeholder="Titolo" 
                                name="titolo"
                                onChange={update}
                            />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="description" style={{fontWeight: 'bold'}}>Descrizione</label>
                            <textarea  
                                className="form-control" 
                                id="description-form" 
                                placeholder="Descrizione" 
                                name="descrizione"
                                onChange={update}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="paese" style={{fontWeight: 'bold'}}>Paese</label>
                            <input type="text"  
                                className="form-control" 
                                id="paese-form" 
                                placeholder="Paese" 
                                name="paese"
                                onChange={update}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="regione" style={{fontWeight: 'bold'}}>Regione</label>
                            <input type="text"  
                                className="form-control" 
                                id="regione-form" 
                                placeholder="Regione" 
                                name="regione"
                                onChange={update}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="provincia" style={{fontWeight: 'bold'}}>Provincia</label>
                            <input type="text" 
                                className="form-control" 
                                id="provincia-form" 
                                placeholder="Provincia" 
                                name="provincia"
                                onChange={update}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="citta" style={{fontWeight: 'bold'}}>Città</label>
                            <input type="text"  
                                className="form-control" 
                                id="description-form" 
                                placeholder="Città" 
                                name="citta"
                                onChange={update}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="via" style={{fontWeight: 'bold'}}>Via</label>
                            <input type="text"  
                                className="form-control" 
                                id="via-form" 
                                placeholder="Via" 
                                name="via"
                                onChange={update}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numero" style={{fontWeight: 'bold'}}>Numero</label>
                            <input type="text"  
                                className="form-control" 
                                id="numero-form" 
                                placeholder="Numero" 
                                name="numero"
                                onChange={update}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numero" style={{fontWeight: 'bold'}}>Attrazioni nei paraggi</label>
                            <textarea  
                                    className="form-control" 
                                    id="attrazioni-form" 
                                    placeholder="Attrazioni" 
                                    name="attrazioni"
                                    onChange={update}
                                />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 checklist-box-col">
                        <h2 style={{marginTop: 0.01 + 'em', textAlign: "center"}}>Servizi</h2>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="wifi"/> 
                            <label style={{fontWeight: 'bold'}}>Wi-Fi</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="asciugacapelli"/> 
                            <label style={{fontWeight: 'bold'}}>Asciugacapelli</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="tv"/> 
                            <label style={{fontWeight: 'bold'}}>Tv</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="zonalavoro"/> 
                            <label style={{fontWeight: 'bold'}}>Zona lavoro</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="ac"/> 
                            <label style={{fontWeight: 'bold'}}>Aria condizionata</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="lavatrice"/> 
                            <label style={{fontWeight: 'bold'}}>Lavatrice</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="kit"/> 
                            <label style={{fontWeight: 'bold'}}>Kit cortesia</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="fumo"/> 
                            <label style={{fontWeight: 'bold'}}>E' permesso fumare</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="animalidomestici"/> 
                            <label style={{fontWeight: 'bold'}}>Animali domestici ammessi</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="baby"/> 
                            <label style={{fontWeight: 'bold'}}>Baby friendly</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="colazione"/> 
                            <label style={{fontWeight: 'bold'}}>Colazione inclusa</label>
                        </div>
                        <h2 style={{marginTop: 0.01 + 'em', textAlign: "center"}}>Struttura</h2>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="piscina"/> 
                            <label style={{fontWeight: 'bold'}}>Piscina</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="idromassaggio"/> 
                            <label style={{fontWeight: 'bold'}}>Idromassaggio</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="sauna"/> 
                            <label style={{fontWeight: 'bold'}}>Sauna</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="spa"/> 
                            <label style={{fontWeight: 'bold'}}>Spa</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="palestra"/> 
                            <label style={{fontWeight: 'bold'}}>Palestra</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="immerso"/> 
                            <label style={{fontWeight: 'bold'}}>Immerso nella natura</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="vista"/> 
                            <label style={{fontWeight: 'bold'}}>Vista mozzafiato</label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 checklist-box-col">
                        <h2 style={{marginTop: 0.01 + 'em', textAlign: "center"}}>Specifiche</h2>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="interoappartamento"/> 
                            <label style={{fontWeight: 'bold'}}>Intera casa</label>
                        </div>
                        <div className="checklist-typo">
                            <input style={{marginRight: 1 + 'em'}} type="checkbox" onChange={update} name="stanzaprivata"/> 
                            <label style={{fontWeight: 'bold'}}>Stanza privata</label>
                        </div>                                
                        <CountersItem />
                        <h3 style={{marginTop: 0.01 + 'em', textAlign: "center"}}>Prezzo a notte</h3>
                        <div className="counter-host" id="counter-host-prezzo">  
                            <input type="text"  
                                className="form-control" 
                                id="prezzo-form" 
                                placeholder="€ ..." 
                                name="prezzo"
                                onChange={update}
                            /> 
                            <h2 style={{marginLeft: 1 + 'em'}}>€</h2>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn btn-gradient" id="register-host-btn">Registra appartamento</button>
                        </div>
                    </div>
                </form>     
            </div>
        </div>
    );
}

export default InsertItem;