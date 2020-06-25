import React, { Component } from 'react';
import CounterSearchbar from './CounterSearchbar'

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

class Searchbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: null,
            data1: null,
            data2: null,
            ospiti: null,
            formErrors: {
                location: "",
                data1: "",
                data2: "",
                ospiti: "",
            }
        };
    }

    handleSubmit = async e => {
        e.preventDefault();
        // submit dei valori in post
        if(formValid(this.state)) {
            var payload = {
                "location" : this.state.location,
                "data1": this.state.data1,
                "data2": this.state.data2,
                "ospiti": this.state.ospiti
            }
            var data = new FormData();
            data.append("json", JSON.stringify(payload));
            var answer = await fetch(
                "/api/auth/search", 
                { method: "POST", 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                    body: data });
        } else {
            console.error('FORM INVALID - ERROR');
        }
    };
    
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors; 

        switch (name) {
            case 'location':
                formErrors.firstname = value.length < 1   
                    ?  "Minimo 1 carattere" // tutti da cambiare in italiano
                    : "";
            break;
        default:
            break;   
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const{ formErrors } = this.state;
        return(
            <form onSubmit={this.handleSubmit} noValidate>
                <div className="row" id="searchbar">
                    <div className="col-sm-3" id="searchbar-place">
                        <div className="form-group">
                            <div id="button-place" className="button-search">
                                <p className="secondary-search">Dove andiamo?</p>
                                <input 
                                    type="text" 
                                    className="input-search" 
                                    id="text-places" 
                                    placeholder="Inserisci destinazione"
                                    name="location" 
                                    onLoad={`loadLocations()`} 
                                    onChange={this.handleChange}
                                    />
                                    {formErrors.location.length > 0 && (
                                        <span className="errorMessage">{formErrors.location}</span>
                                    )}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3" id="searchbar-date">
                    <div id="button-date" className="button-search">
                        <p className="secondary-search">Quando partiamo?</p>
                        <input className="secondary-placeholder" type="date" name="data1"></input><input type="date" className="secondary-placeholder" name="data2"></input>
                    </div>
                    </div>
                    <div className="col-sm-3" id="searchbar-guests">
                        <CounterSearchbar />
                    </div>
                    <div className="col-sm-3" id="cerca">
                    <button id="search-button" type="submit" className="btn btn-gradient" style={{fontSize: 1.5 + 'em'}}>
                        Cerca
                        <img width="25em" src="img/shapes-and-symbols.svg" style={{marginLeft: 1 + 'em'}} />
                    </button>
                    </div>
                </div>
            </form>
            );
        }
    }

export default Searchbar;