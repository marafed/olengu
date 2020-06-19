import React from 'react';

function Login() {
  return(
    <div className="Login">
      <div className="container-fluid" id="login">
        <div className="row d-flex justify-content-center" id="login-box">
          <div className="d-flex justify-content-between" id="login-box-col">
            <form className="needs-validation" action="" id="login-form" novalidate>
              <div className="form-group">
                <label for="email" style={{fontWeight: 'bold'}}>Email</label>
                <input type="email" className="form-control" id="email-form" placeholder="Email" name="email" required />
              </div>
              <div className="form-group">
                <label for="pwd" style={{fontWeight: 'bold'}}>Password</label>
                <input type="password" className="form-control" id="pwd-form" placeholder="Password" name="pswd" required />
              </div>
              <div className="text-center">
                <p style={{color: '#bdbdbd'}} >Non sei ancora registrato? <a style={{color: '#ff31ea', fontWeight: 'bold'}} href="/register">Registrati!</a></p>
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-gradient" id="login-form-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
