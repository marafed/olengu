import React, { Component,  useState} from 'react';
import CountersItem from '../Components/CountersItem'

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // se la lunghezza non è maggiore di zero non è validato 
    Object.values(formErrors).forEach(val => { 
        val.length > 0 && (valid = false);
    });
    
    // verifica che il form sia stato compilato altrimenti non è validato
    Object.values(rest).forEach(val => {
        val === null && (valid = false);                                
    });

    return valid;
};



class InsertItem extends Component  {
    constructor(props) {
        super(props);
    
        this.state = {
            // count: 1,
            titolo: null,
            descrizione: null, 
            paese: null, 
            regione: null,
            provincia: null,
            citta: null,
            via: null,
            numero: null,
            attrazioni: null,
            wifi: null,
            asciugacapelli: null, 
            tv: null, 
            zonalavoro: null,
            ac: null, 
            lavatrice: null, 
            kit: null,
            fumo: null,
            animalidomestici: null,
            baby: null, 
            colazione: null,
            piscina: null,
            idromassaggio: null,
            sauna: null,
            spa: null,
            palestra: null,
            immerso: null,
            vista: null,
            interoappartamento: null,
            stanzaprivata: null, 
            prezzo: null, 
            formErrors: {
                titolo: "",
                descrizione: "", 
                paese: "", 
                regione: "",
                provincia: "",
                citta: "",
                via: "",
                numero: "",
                attrazioni: "",
                prezzo:""
            }
        };
    }

    handleSubmit = async e => {
        e.preventDefault();
        if(formValid(this.state)) {
            var payload = {
                "titolo": this.state.titolo, 
                "descrizione": this.state.descrizione,
                "paese": this.state.paese,
                "regione": this.state.regione,
                "provincia": this.state.provincia,
                "citta": this.state.citta,
                "via": this.state.via,
                "numero": this.state.numero,
                "attrazioni": this.state.attrazioni,
                "wifi": this.state.wifi,
                "asciugacapelli": this.state.asciugacapelli,
                "tv": this.state.tv,
                "zonalavoro": this.state.zonalavoro,
                "ac": this.state.ac,
                "lavatrice": this.state.lavatrice,
                "kit": this.state.kit,
                "fumo": this.state.fumo,
                "animalidomestici": this.state.animalidomestici,
                "baby": this.state.baby,
                "colazione": this.state.colazione,
                "piscina": this.state.piscina,
                "idromassaggio": this.state.idromassaggio,
                "sauna": this.state.sauna,
                "spa": this.state.spa,
                "palestra": this.state.palestra,
                "immerso": this.state.immerso,
                "vista": this.state.vista,
                "interoappartamento": this.state.interoappartamento,
                "stanzaprivata": this.state.stanzaprivata,
                "prezzo": this.state.prezzo
            }
            var data = new FormData();
            data.append("json", JSON.stringify(payload));
            var answer = await fetch(
                "/api/auth/insertitem", 
                { method: "POST", body: data });
            } else {
                console.error('FORM INVALID - ERROR');
            }
        };

    handleChange = async e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
        switch (name) {
            case 'titolo':
                formErrors.titolo = value.length < 5   
                    ?  "Minimo 5 caratteri" // tutti da cambiare in italiano
                    : "";
            break;
            case 'descrizione':
                formErrors.descrizione = value.length < 15  
                    ?  "Minimo 15 caratteri" // tutti da cambiare in italiano
                    : "";
            break;
            case 'paese':
                formErrors.paese = value.length < 2  
                    ?  "Minimo 2 caratteri" // tutti da cambiare in italiano
                    : "";
            break;
            case 'regione':
                formErrors.regione = value.length < 2  
                    ?  "Minimo 2 caratteri" // tutti da cambiare in italiano
                    : "";
            break;
            case 'provincia':
                formErrors.provincia = value.length < 2
                    ?  "Minimo 2 caratteri" // tutti da cambiare in italiano
                    : "";
            break;
            case 'citta':
                formErrors.citta = value.length < 2 
                    ?  "Minimo 2 caratteri" // tutti da cambiare in italiano
                    : "";
            break;
            case 'via':
                formErrors.via = value.length < 5
                    ?  "Minimo 5 caratteri" // tutti da cambiare in italiano
                    : "";
            break;
            case 'numero':
                formErrors.numero = value.length < 1  
                    ?  "Minimo 1 caratteri" // tutti da cambiare in italiano
                    : "";
            break;
            case 'attrazioni':
                formErrors.attrazioni = value.length < 10 
                    ?  "Minimo 10 caratteri" // tutti da cambiare in italiano
                    : "";
                    
            break;
        default: 
            break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        // let { count } = this.state;
        const{ formErrors } = this.state;
            return(
                <div className="InsertItem container-fluid">
                    <div className="row" id="insertitem-box">
                        <form onSubmit={this.handleSubmit} id="register-form" noValidate>
                            <div className="col-sm-3" id="register-box-col">
                                <h2 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}> Info generali </h2>
                                <div className="form-group">
                                    <label htmlFor="titolo" style={{fontWeight: 'bold'}}>Titolo</label>
                                    <input type="text" 
                                        className="form-control" 
                                        id="title-form" 
                                        placeholder="Titolo" 
                                        name="titolo"
                                        onChange={this.handleChange}
                                    />
                                </div> 
                                {formErrors.titolo.length > 0 && (
                                        <span className="errorMessage">{formErrors.titolo}</span>
                                    )}
                                <div className="form-group">
                                    <label htmlFor="description" style={{fontWeight: 'bold'}}>Descrizione</label>
                                    <textarea  
                                        className="form-control" 
                                        id="description-form" 
                                        placeholder="Descrizione" 
                                        name="descrizione"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                {formErrors.descrizione.length > 0 && (
                                        <span className="errorMessage">{formErrors.descrizione}</span>
                                    )}
                                <div className="form-group">
                                    <label htmlFor="paese" style={{fontWeight: 'bold'}}>Paese</label>
                                    <input type="text"  
                                        className="form-control" 
                                        id="paese-form" 
                                        placeholder="Paese" 
                                        name="paese"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                {formErrors.paese.length > 0 && (
                                        <span className="errorMessage">{formErrors.paese}</span>
                                    )}
                                <div className="form-group">
                                    <label htmlFor="regione" style={{fontWeight: 'bold'}}>Regione</label>
                                    <input type="text"  
                                        className="form-control" 
                                        id="regione-form" 
                                        placeholder="Regione" 
                                        name="regione"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                {formErrors.regione.length > 0 && (
                                        <span className="errorMessage">{formErrors.regione}</span>
                                    )}
                                <div className="form-group">
                                    <label htmlFor="provincia" style={{fontWeight: 'bold'}}>Provincia</label>
                                    <input type="text" 
                                        className="form-control" 
                                        id="provincia-form" 
                                        placeholder="Provincia" 
                                        name="provincia"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                {formErrors.provincia.length > 0 && (
                                        <span className="errorMessage">{formErrors.provincia}</span>
                                    )}
                                <div className="form-group">
                                    <label htmlFor="citta" style={{fontWeight: 'bold'}}>Città</label>
                                    <input type="text"  
                                        className="form-control" 
                                        id="description-form" 
                                        placeholder="Città" 
                                        name="citta"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                {formErrors.citta.length > 0 && (
                                        <span className="errorMessage">{formErrors.citta}</span>
                                    )}
                                <div className="form-group">
                                    <label htmlFor="via" style={{fontWeight: 'bold'}}>Via</label>
                                    <input type="text"  
                                        className="form-control" 
                                        id="via-form" 
                                        placeholder="Via" 
                                        name="via"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                {formErrors.via.length > 0 && (
                                        <span className="errorMessage">{formErrors.via}</span>
                                    )}
                                <div className="form-group">
                                    <label htmlFor="numero" style={{fontWeight: 'bold'}}>Numero</label>
                                    <input type="text"  
                                        className="form-control" 
                                        id="numero-form" 
                                        placeholder="Numero" 
                                        name="numero"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                {formErrors.numero.length > 0 && (
                                        <span className="errorMessage">{formErrors.numero}</span>
                                    )}
                                <div className="form-group">
                                    <label htmlFor="numero" style={{fontWeight: 'bold'}}>Attrazioni nei paraggi</label>
                                    <textarea  
                                            className="form-control" 
                                            id="attrazioni-form" 
                                            placeholder="Attrazioni" 
                                            name="attrazioni"
                                            onChange={this.handleChange}
                                        />
                                </div>
                                {formErrors.attrazioni.length > 0 && (
                                        <span className="errorMessage">{formErrors.attrazioni}</span>
                                    )}
                            </div>
                            <div className="col-sm-3" id="checklist-box-col">
                                <h2 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Servizi</h2>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="wifi"/> 
                                    <label style={{fontWeight: 'bold'}}>Wi-Fi</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="asciugacapelli"/> 
                                    <label style={{fontWeight: 'bold'}}>Asciugacapelli</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="tv"/> 
                                    <label style={{fontWeight: 'bold'}}>Tv</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="zonalavoro"/> 
                                    <label style={{fontWeight: 'bold'}}>Zona lavoro</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="ac"/> 
                                    <label style={{fontWeight: 'bold'}}>Aria condizionata</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="lavatrice"/> 
                                    <label style={{fontWeight: 'bold'}}>Lavatrice</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="kit"/> 
                                    <label style={{fontWeight: 'bold'}}>Kit cortesia</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="fumo"/> 
                                    <label style={{fontWeight: 'bold'}}>E' permesso fumare</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="animalidomestici"/> 
                                    <label style={{fontWeight: 'bold'}}>Animali domestici ammessi</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="baby"/> 
                                    <label style={{fontWeight: 'bold'}}>Baby friendly</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="colazione"/> 
                                    <label style={{fontWeight: 'bold'}}>Colazione inclusa</label>
                                </div>
                                <h2 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Struttura</h2>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="piscina"/> 
                                    <label style={{fontWeight: 'bold'}}>Piscina</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="idromassaggio"/> 
                                    <label style={{fontWeight: 'bold'}}>Idromassaggio</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="sauna"/> 
                                    <label style={{fontWeight: 'bold'}}>Sauna</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="spa"/> 
                                    <label style={{fontWeight: 'bold'}}>Spa</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="palestra"/> 
                                    <label style={{fontWeight: 'bold'}}>Palestra</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="immerso"/> 
                                    <label style={{fontWeight: 'bold'}}>Immerso nella natura</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="vista"/> 
                                    <label style={{fontWeight: 'bold'}}>Vista mozzafiato</label>
                                </div>
                            </div>
                            <div className="col-sm-3" id="checklist-box-col">
                                <h2 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Specifiche</h2>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="interoappartamento"/> 
                                    <label style={{fontWeight: 'bold'}}>Intera casa</label>
                                </div>
                                <div className="checklist-typo">
                                    <input style={{marginRight: 1 + 'em'}} type="checkbox" name="stanzaprivata"/> 
                                    <label style={{fontWeight: 'bold'}}>Stanza privata</label>
                                </div>                                
                                <CountersItem />
                                <h3 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Prezzo a notte</h3>
                                <div className="counter-host" id="counter-host-prezzo">  
                                    <input type="text"  
                                        className="form-control" 
                                        id="prezzo-form" 
                                        placeholder="€ ..." 
                                        name="prezzo"
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
    }

export default InsertItem;