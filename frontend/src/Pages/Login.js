import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors }) => {
    let valid = true;

    // se la lunghezza non è maggiore di zero non è validato 
    Object.values(formErrors).forEach(val => { 
        val.length > 0 && (valid = false);
        val === null && (valid = false);
    });

    return valid;
}; 

class Login extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            email: null,
            password: null,
            formErrors: {
                email: "",
                password:"",
            }
        }
    }

    
    handleLogin = async e => {
        e.preventDefault();
        if(formValid(this.state)) {
            var payload = {
                "email": this.state.email,
                "password": this.state.password
            }
            var answer = await fetch(
                "/api/auth/login",
                {
                    method: "POST",
                    body: JSON.stringify(payload),
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                      }
                })
                .then(
                    
                    res => {
                    if (!res.ok) {
                        const error = new Error(res.error);
                        throw error;
                    }else{
                        return res.json()
                    }
                })
                .then(json => {
                    console.log(json);
                    if(json.status === true) {
                        localStorage.setItem('token', json.token);
                        localStorage.setItem('ishost', json.ishost);
                        this.props.history.push('/dashboard');
                    } else {
                        alert("credenziali non valide");
                    }
                })
                .catch(err => {
                    console.error(err);
                    alert('Errore: per favore riprova');
                });
        } else {
            console.error("FORM INVALID - ERROR");
            alert("Form non valido");
        }
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'email':
                formErrors.email = emailRegex.test(value)
                ? ""
                : "Indirizzo email non valido";
            break;
            case 'password':
                formErrors.password = value.length < 2 
                ? "Minimo 6 caratteri"
                : "";
            break;
        default: 
            break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };


    render() {
        const { formErrors } = this.state;
        return(
            <div className="Login">
                <div className="container-fluid" id="login">
                    <div className="row d-flex justify-content-center" id="login-box">
                        <div className="d-flex justify-content-between" id="login-box-col">
                            <form onSubmit={ this.handleLogin }className="needs-validation" id="login-form" noValidate>
                            <div className="form-group">
                                <label htmlFor="email" style={{fontWeight: 'bold'}}>Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email-form" 
                                    placeholder="Email" 
                                    name="email" 
                                    onChange={ this.handleChange }
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
                                    onChange= { this.handleChange }
                                    noValidate 
                                />
                                {formErrors.password.length > 0 && (
                                    <span className="errorMessage">{formErrors.password}</span>
                                )}
                            </div>
                            <div className="text-center">
                                <p style={{color: '#bdbdbd'}}>Non sei ancora registrato? <Link to="/Register" style={{color: '#ff31ea', fontWeight: 'bold'}}>Registrati!</Link></p>
                            </div>
                            <div className="text-right">
                                <button onClick={this.handleLogin} className="btn btn-gradient" id="login-form-btn">Login</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
