import React, { useState, useEffect } from 'react';

/* addCount = () => {
    this.setState({
        count: this.state.count + 1
    });
};

subCount = () => {
    if (this.state.count > 1) {
        this.setState({ count: this.state.count - 1 });
    } else {
        this.setState({count: 1});
    }
};
*/

// class CountersItem extends Component  {
   //  render() {
       //  let { count } = this.state;
        
function CountersItem() {

        useEffect( () => {
            window.loadLocations();
          }
        );
      
        const [get, set] = useState(1);
      
        const add = () => {
            set(get+1);
        }
      
        const sub = () => {
            if (get > 1) {
                set(get-1);
            } else {
                set(1);
            }
        }
        return (
            <div className="CountersItem">
                <h4 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Ospiti</h4>
                <div className="counter-host">
                    <img src="/img/minus.svg" className="guests-button" onClick={sub} />
                        {get}
                    <img src="/img/plus.svg" className="guests-button" onClick={add} />
                </div>
                <h4 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Stanze</h4>
                <div className="counter-host">
                    <img src="/img/minus.svg" className="guests-button" onClick={sub} />
                        {get}
                    <img src="/img/plus.svg" className="guests-button" onClick={add} />
                </div>
                <h4 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Bagni</h4>
                <div className="counter-host">
                    <img src="/img/minus.svg" className="guests-button" onClick={sub} />
                        {get}
                    <img src="/img/plus.svg" className="guests-button" onClick={add} />
                </div>
                <h4 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Letti singoli</h4>
                <div className="counter-host">
                    <img src="/img/minus.svg" className="guests-button" onClick={sub} />
                        {get}
                    <img src="/img/plus.svg" className="guests-button" onClick={add} />
                </div>
                <h4 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Letti matrimoniali</h4>
                <div className="counter-host">
                    <img src="/img/minus.svg" className="guests-button" onClick={sub} />
                        {get}
                    <img src="/img/plus.svg" className="guests-button" onClick={add} />
                </div>
                <h4 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Divani letto</h4>
                <div className="counter-host">
                    <img src="/img/minus.svg" className="guests-button" onClick={sub} />
                        {get}
                    <img src="/img/plus.svg" className="guests-button" onClick={add} />
                </div>
            </div>
        ); 
    }
    export default CountersItem;