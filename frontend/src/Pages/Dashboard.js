import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Dashboard() {

    const [utente, setUtente] = useState("")

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = async () => {
        const route = "http://localhost:3500/api/getdatibyuserid/";
        const id_usr = localStorage.getItem("user")
        await axios.get(route + id_usr, {"Access-Control-Allow-Origin":"http://localhost:3500"})
        .then(function (response) {
          const name = response.data.nome.charAt(0).toUpperCase() + response.data.nome.substring(1).toLowerCase();
          const surname = response.data.cognome.charAt(0).toUpperCase() + response.data.cognome.substring(1).toLowerCase();
          const fullName = name + " " + surname
          setUtente(fullName)
          }
        ).catch(function (error) {
          alert(error);
      });
    };

    return(
        <div className="containerFluid">
            <div className="row" id="insertitem-box">
                <div className="col-lg-6 col-sm-12 user-card">
                    <h3>Ciao {utente}</h3>
                </div>
                <div className="col-lg-6 col-sm-12 mt-4">
                    <Link to="/ShowBooks">
                        <button className="btn-gradient btn-dashboard" >Le tue prenotazioni</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;


