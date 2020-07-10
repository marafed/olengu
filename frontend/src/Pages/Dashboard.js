import React from 'react';
import { Link } from 'react-router-dom';
import FetchUtente from '../Utils/FetchUtente';


function Dashboard() {


    /* componentDidMount() {
        fetch('/api/secret')
          .then(res => res.text())
          .then(res => this.setState({message: res}));
      } */

    return(
        <div className="containerFluid">
            <div className="row" id="insertitem-box">
                <div className="col-lg-6 col-sm-12 user-card">
                    <h3>Ciao</h3>
                    <FetchUtente />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <Link to="/ShowBooks">
                        <button className="btn-gradient btn-dashboard" >Le tue prenotazioni</button>
                    </Link>   
                    <button className="btn-gradient btn-dashboard"> Modifica le tue informazioni </button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;