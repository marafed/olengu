import React, { Component } from 'react';

/* const formValid = ({ formErrors, ...rest }) => {

};

class InsertItem extends Component  {
    constructor(props) {
        super(props);
    
        this.state = {

        }
    };

    handleSubmit = async e => {
        e.preventDefault();

        if(formValid(this.state)) {

        } else {

        }
    };

    handleChange = async e => {
        e.preventDefault();

        switch(name) {
            case '':
            
            break;
        default: 
            break;
        }
    }
    */
       
    // render() { 
        function InsertItem() {
            return(
                <div className="InsertItem container-fluid">
                        <form onSubmit="" id="register-form" noValidate>
                            <div className="row" id="insertitem-box">
                                <div className="col-sm-4" id="register-box-col">
                                    <div className="form-group">
                                        <label htmlFor="name" style={{fontWeight: 'bold'}}>Titolo</label>
                                        <input type="text" 
                                            className="form-control" 
                                            id="title-form" 
                                            placeholder="Titolo" 
                                            name="titolo"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description" style={{fontWeight: 'bold'}}>Descrizione</label>
                                        <textarea  
                                            className="form-control" 
                                            id="description-form" 
                                            placeholder="Descrizione" 
                                            name="descrizione"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="paese" style={{fontWeight: 'bold'}}>Paese</label>
                                        <input type="text"  
                                            className="form-control" 
                                            id="paese-form" 
                                            placeholder="Paese" 
                                            name="paese"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="regione" style={{fontWeight: 'bold'}}>Regione</label>
                                        <input type="text"  
                                            className="form-control" 
                                            id="regione-form" 
                                            placeholder="Regione" 
                                            name="regione"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="provincia" style={{fontWeight: 'bold'}}>Provincia</label>
                                        <input type="text"  
                                            className="form-control" 
                                            id="provincia-form" 
                                            placeholder="Provincia" 
                                            name="provincia"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="citta" style={{fontWeight: 'bold'}}>Città</label>
                                        <input type="text"  
                                            className="form-control" 
                                            id="description-form" 
                                            placeholder="Città" 
                                            name="città"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="via" style={{fontWeight: 'bold'}}>Via</label>
                                        <input type="text"  
                                            className="form-control" 
                                            id="via-form" 
                                            placeholder="Via" 
                                            name="via"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="numero" style={{fontWeight: 'bold'}}>Numero</label>
                                        <input type="text"  
                                            className="form-control" 
                                            id="numero-form" 
                                            placeholder="Numero" 
                                            name="numero"
                                        />
                                    </div>
                                    <div className="text-right">
                                        <button type="submit" className="btn btn-gradient" id="register-form-btn">Registrati</button>
                                    </div>
                                </div>
                                <div className="col-sm-2" id="checklist-box-col">
                                    <table>
                                        <tr>
                                            <td>
                                                <input
                                                type="checkbox"
                                                name="wifi"
                                                />
                                            </td>
                                            <td>
                                            <label style={{fontWeight: 'bold'}, {padding: 0.5 + 'em'}}>Wi-Fi</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input
                                                type="checkbox"
                                                name="wifi"
                                                />
                                            </td>
                                            <td>
                                            <label style={{fontWeight: 'bold'}, {padding: 0.5 + 'em'}}>Asciugacapelli</label>
                                            </td>
                                        </tr>
                                    </table>
                                
                                </div>
                            </div>
                        </form>
                </div>
            );
        }
// }   

export default InsertItem;