import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import BottoneTermina from '../Components/BottoneTermina' 

function Payment({ props }) {
  const [state, setState] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    id: props.id
  });

  const handleInputFocus = (e) => {
    setState({ focus: e.target.name });
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ [name]: value });
  }


  return (
    <div id="PaymentForm row">
      <div className="col-lg-8">
            <Cards
                cvc={state.cvc}
                expiry={state.expiry}
                focused={state.focus}
                name={state.name}
                number={state.number}  
            />
      </div>
      <div className="col-lg-4" style={{padding: 1 + 'em', margin: 1 + 'em'}}>
          <form>
              <input
                  type="tel"
                  name="number"
                  placeholder="Card Number"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
              /><br />
              <input
                  type="name"
                  name="name"
                  placeholder="Nome intestatario"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
              /><br />
              <input
                  type="cvc"
                  name="cvc"
                  placeholder="CVC"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
              /><br />
              <input
                  type="expiry"
                  name="expiry"
                  placeholder="Date of Expire"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
              /><br />
              <button>
                <BottoneTermina state={state} />
              </button>
          </form>
      </div>
    </div>
  );
}
export default Payment;