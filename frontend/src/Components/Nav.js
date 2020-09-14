import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Nav() {

  const handleLogout = () => {
    localStorage.removeItem("token")
    console.log("Logout effettuato")
    window.location.reload(false);
    localStorage.removeItem('token')
  } 

  if (localStorage.getItem('token') != null) {
    return(
      <div className="contaid-block w-100" id="topbar">
        <div className="row">
          <div className="col-sm-4" id="topbar1">
            <Link to="/">
              <img id="logo" src="/img/logo.png" />
            </Link>
          </div>
          <div className="col-sm-8" id="topbar2">
            <Link to="/PortaleHost">
              <button id="topbar-host" width="25" className="btn btn-secondary">Portale host</button>
            </Link>
            <Link to="/dashboard">
              <button id="topbar-profile" className="btn btn-secondary">
                <img width="28em" src="/img/avatar.svg" />
              </button>
            </Link>
            <Link to="/logout">
              <button className="btn btn-gradient" onClick={handleLogout}>Logout</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return(
      <div className="contaid-block w-100" id="topbar">
        <div className="row">
          <div className="col-sm-4" id="topbar1">
            <Link to="/">
              <img id="logo" src="/img/logo.png" />
            </Link>
          </div>
          <div className="col-sm-8" id="topbar2">
            <Link to="/login">
              <button className="btn btn-gradient">Login</button>
           </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
