import React, { Component, useState } from 'react';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/); // RegEx per l'email 

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // se la lunghezza non è maggiore di zero non è validato 
    Object.values(formErrors).forEach(val => { 
        val.length > 0 && (valid = false);
        val === null && (valid = false);                                
    });
    return valid;
}; 

class Register extends Component {
    constructor(props) {
        super(props);
        // setting iniziale 
        this.state = {
            firstname: null, 
            surname: null, 
            birthday: null,
            email: null, 
            password: null, 
            formErrors: {
                firstname: "",
                surname: "", 
                birthday: "",
                email: "", 
                password: "", 
            }
        };
    }


    handleSubmit = async e => {
        e.preventDefault();
        // submit dei valori in post
        if(formValid(this.state)) {
            var payload = {
                "firstname" : this.state.firstname,
                "surname": this.state.surname,
                "birthday": this.state.birthday,
                "email": this.state.email,
                "password": this.state.password,
            }
            var answer = await fetch(
                "/api/auth/register",
                {
                    method: "POST",
                    body: JSON.stringify(payload),
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                      }
                }
            );
            if((await answer.json()).affectedRows == 1) {
                this.props.history.push('/login');
            }
        } else {
            console.error('FORM INVALID - ERROR');
        }
        
    };   

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors; 
        // gestione errori input
        switch (name) {
            case 'firstname':
                formErrors.firstname = value.length < 2   
                    ?  "Minimum 2 character required" // tutti da cambiare in italiano
                    : "";
            break;
            case 'surname':
                formErrors.surname = value.length < 2   
                    ?  "Minimum 2 character required"
                    : "";
            break;
            case 'email':
                formErrors.email = emailRegex.test(value)   
                    ? ''
                    : 'Invalid email address';
            break;
            case 'password':
                formErrors.password = value.length < 6   
                    ?  "Minimum 6 character required"
                    : "";
            break;
        default:
            break;   
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() { // rendering finale della pagina con handling degli errori
        const{ formErrors } = this.state;
        return(
            <div className="Register">
                <div className="container-fluid">
                    <div className="row" id="register-box">
                        <div className="col-sm-4 register-box-col">
                            <form onSubmit={this.handleSubmit} id="register-form" noValidate>
                                <div className="form-group">
                                    <label htmlFor="firstname" style={{fontWeight: 'bold'}}>Nome</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="first-name-form" 
                                        placeholder="Nome" 
                                        name="firstname"
                                        onChange={this.handleChange} 
                                        noValidate 
                                    />
                                    {formErrors.firstname.length > 0 && (
                                        <span className="errorMessage">{formErrors.firstname}</span>
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

export default Register;