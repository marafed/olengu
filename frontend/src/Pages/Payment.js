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
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form style={{padding: 1 + 'em'}}>
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
        </form>
      </div>
    );
  }
}