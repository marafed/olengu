import React, { Component } from 'react';

const formValid = ({ formErrors, ...rest }) => {

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
       
    render() {
        const { formErrors } = this.state; 

        return(
            <div className="InsertItem">
                <div className="container-fluid">
                    <div className="row" id="insertitem-box">
                        <div className="col-sm-4" id="register-box-col">
                            <form onSubmit={this.handleSubmit} id="register-form" noValidate>
                                <div className="form-group">
                                    <label htmlFor="name" style={{fontWeight: 'bold'}}>Nome</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="title-form" 
                                        placeholder="Titolo" 
                                        name="title"
                                        onChange={this.handleChange} 
                                        noValidate 
                                    />
                                    {formErrors.title.length > 0 && (
                                        <span className="errorMessage">{formErrors.title}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="surname" style={{fontWeight: 'bold'}}>Cognome</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="surname-form" 
                                        placeholder="Cognome" 
                                        name="surname"
                                        onChange={this.handleChange}
                                        noValidate 
                                    />
                                    {formErrors.surname.length > 0 && (
                                        <span className="errorMessage">{formErrors.surname}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="birthday" style={{fontWeight: 'bold'}}>Data di nascita</label>
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        id="birthday-form" 
                                        placeholder="Data di nascita" 
                                        name="birthday" 
                                        onChange={this.handleChange}
                                        noValidate 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" style={{fontWeight: 'bold'}}>Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email-form" 
                                        placeholder="Email" 
                                        name="email" 
                                        onChange={this.handleChange}
                                        noValidate 
                                    />
                                    {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd" style={{fontWeight: 'bold'}}>Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="pwd-form" 
                                        placeholder="Password" 
                                        name="password"
                                        onChange={this.handleChange} 
          
                                        noValidate 
                                    />
                                    {formErrors.password.length > 0 && (
                                        <span className="errorMessage">{formErrors.password}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="conf_pwd" style={{fontWeight: 'bold'}}>Conferma password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="conf-pwd-form" 
                                        placeholder="Conferma password" 
                                        name="conf_pwd" 
                                        onChange={this.handleChange}
                                        noValidate 
                                    />
                                    {formErrors.conf_pwd.length > 0 && (
                                        <span className="errorMessage">{formErrors.conf_pwd}</span>
                                    )}
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="btn btn-gradient" id="register-form-btn">Registrati</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-4" id="commercial-ad">
                            <img src="/img/txt-register.png" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}   

export default InsertItem;