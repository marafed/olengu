import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default class Payment extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm row">
              <div className="col-lg-8">
                    <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focused={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}  
                    />
              </div>
            <div className="col-lg-4" style={{padding: 1 + 'em', margin: 1 + 'em'}}>
                <form>
                    <input
                        type="tel"
                        name="number"
                        placeholder="Card Number"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    /><br />
                    <input
                        type="name"
                        name="name"
                        placeholder="Nome intestatario"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    /><br />
                    <input
                        type="cvc"
                        name="cvc"
                        placeholder="CVC"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    /><br />
                    <input
                        type="expiry"
                        name="expiry"
                        placeholder="Date of Expire"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    /><br />
                    <button className="btn-gradient btn-dashboard">Termina e paga</button>
                </form>
            </div>
        </div>
    );
  }
}