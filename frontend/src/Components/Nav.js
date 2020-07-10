import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [status, setStatus] = useState(0);
  if(!localStorage.getItem('ishost')) {
    setStatus(0);
  } else if (localStorage.getItem('ishost') == 0) {
    setStatus(1);
  } else if (localStorage.getItem('ishost') == 1) {
    setStatus(2);
  }

  const becomehost = () => {
    return(
      <Link to="/become_host">
        <button id="topbar-host" width="25" className="btn btn-secondary">Diventa un host</button>
      </Link>
    );
  }

  const dashboard = () => {
    return(
      <Link to="/dashboard">
        <button id="topbar-profile" className="btn btn-secondary">
          <img width="28em" src="/img/avatar.svg" />
        </button>
      </Link>
    );
  }

  const portalehost = () => {
    return(
      <Link to="/PortaleHost">
        <button id="topbar-host" width="25" className="btn btn-secondary">Portale host</button>
      </Link>
    );
  }

  const login = () => {
    return(
      <Link to="/login">
        <button className="btn btn-gradient">Login</button>
      </Link>
    );
  }

  const logout = () => {
    return(
      <Link to="/logout">
        <button className="btn btn-gradient">Logout</button>
      </Link>
    );
  }

  const render = () => {
    if ( status == 0) {
      return(
        <div className="col-sm-8" id="topbar2">
          <login />
        </div>
      );
    } else if ( status == 1 ) {
      return(
        <div className="col-sm-8" id="topbar2">
          <becomehost />
          <dashboard />
          <logout />
        </div>
      );
    } else if ( status == 2) {
      return(
        <div className="col-sm-8" id="topbar2">
          <portalehost />
          <dashboard />
          <logout />
        </div>
      );
    }
    return(<h3>Error</h3>);
  }

  return(
    <div className="contaid-block w-100" id="topbar">
      <div className="row">
        <div className="col-sm-4" id="topbar1">
          <Link to="/">
            <img id="logo" src="/img/logo.png" />
          </Link>
        </div>
        <render />
      </div>
    </div>
  );
}

export default Nav;
