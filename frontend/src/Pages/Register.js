import React from 'react';

function Register() {
  return(
    <div className="Register">
      <div className="container-fluid">
        <div className="row" id="register-box">
            <div className="col-sm-4" id="register-box-col">
                <form className="needs-validation" action="" id="register-form" novalidate>
                    <div className="form-group">
                        <label for="first-name" style={{fontWeight: 'bold'}}>Nome</label>
                        <input type="text" className="form-control" id="first-name-form" placeholder="Nome" name="nome" required />
                    </div>
                    <div className="form-group">
                        <label for="surname" style={{fontWeight: 'bold'}}>Cognome</label>
                        <input type="text" className="form-control" id="surname-form" placeholder="Cognome" name="cognome" required />
                    </div>
                    <div className="form-group">
                        <label for="birthday" style={{fontWeight: 'bold'}}>Data di nascita</label>
                        <input type="date" className="form-control" id="birthday-form" placeholder="Data di nascita" name="birthday" required />
                    </div>
                    <div className="form-group">
                        <label for="email" style={{fontWeight: 'bold'}}>Email</label>
                        <input type="email" className="form-control" id="email-form" placeholder="Email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label for="pwd" style={{fontWeight: 'bold'}}>Password</label>
                        <input type="password" className="form-control" id="pwd-form" placeholder="Password" name="pswd" required />
                    </div>
                    <div className="form-group">
                        <label for="conf-pwd" style={{fontWeight: 'bold'}}>Conferma password</label>
                        <input type="password" className="form-control" id="conf-pwd-form" placeholder="Conferma password" name="conf-pswd" required />
                    </div>
                    <div className="text-right">
                        <button className="btn btn-gradient" id="register-form-btn">Registrati</button>
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

export default Register;
