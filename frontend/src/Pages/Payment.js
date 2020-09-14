import React, {useState, useEffect} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {Link} from 'react-router-dom'
import { contains } from 'jquery';

function Payment() {
  const [state, setState] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target.value;
    let temp = state;
    temp[name] = value;
    setState({ temp });
  }

  const handleSubmit =  () => {
    alert("Prenotazione effettuata")
  }

  return (
    <div id="PaymentForm row">
      <div className="col-lg-12 mt-5">
            <Cards
                cvc={state.cvc}
                expiry={state.expiry}
                focused={state.focus}
                name={state.name}
                number={state.number}  
            />
      </div>
      <div className="col-lg-12 text-center mt-4">
          <form >
              <input
                  type="tel"
                  name="number"
                  class="btn btn-secondary mt-3"
                  placeholder="Card Number"
                  onChange={handleInputChange}
              /><br />
              <input
                  type="name"
                  name="name"
                  class="btn btn-secondary mt-3"
                  placeholder="Nome intestatario"
                  onChange={handleInputChange}
              /><br />
              <input
                  type="cvc"
                  name="cvc"
                  class="btn btn-secondary mt-3"
                  placeholder="CVC"
                  onChange={handleInputChange}
              /><br />
              <input
                  type="expiry"
                  name="expiry"
                  class="btn btn-secondary my-3"
                  placeholder="Date of Expire"
                  onChange={handleInputChange}
              /><br />
              <Link to = "/Dashboard">
                  <button type = "submit"  onClick={handleSubmit} className="btn btn-gradient btn-dashboard">Termina e paga</button>
              </Link>
          </form>
      </div>
    </div>
  );
}
export default Payment;