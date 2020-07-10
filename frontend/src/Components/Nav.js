import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  if (localStorage.getItem('ishost') === 0) {
    return(
      <div className="contaid-block w-100" id="topbar">
        <div className="row">
          <div className="col-sm-4" id="topbar1">
            <Link to="/">
              <img id="logo" src="/img/logo.png" />
            </Link>
          </div>
          <div className="col-sm-8" id="topbar2">
            <Link to="/become_host">
              <button id="topbar-host" width="25" className="btn btn-secondary">Diventa un host</button>
            </Link>
            <Link to="/dashboard">
              <button id="topbar-profile" className="btn btn-secondary">
                <img width="28em" src="/img/avatar.svg" />
              </button>
            </Link>
            <Link to="/logout">
              <button className="btn btn-gradient">Logout</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  if (localStorage.getItem('ishost') === 1) {
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
              <button className="btn btn-gradient">Logout</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
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
export default Nav;
