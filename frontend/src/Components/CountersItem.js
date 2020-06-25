    /*        addCount = () => {
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
    
    
    <h4 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Ospiti</h4>
    <div className="counter-host">
        <img src="/img/minus.svg" className="guests-button" onClick={this.subCount} />
            {count}
        <img src="/img/plus.svg" className="guests-button" onClick={this.addCount} />
    </div>
    <h4 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Stanze</h4>
    <div className="counter-host">
        <img src="/img/minus.svg" className="guests-button" onClick={this.subCount} />
            {count}
        <img src="/img/plus.svg" className="guests-button" onClick={this.addCount} />
    </div>
    <h4 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Bagni</h4>
    <div className="counter-host">
        <img src="/img/minus.svg" className="guests-button" onClick={this.subCount} />
            {count}
        <img src="/img/plus.svg" className="guests-button" onClick={this.addCount} />
    </div>
    <h4 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Letti singoli</h4>
    <div className="counter-host">
        <img src="/img/minus.svg" className="guests-button" onClick={this.subCount} />
            {count}
        <img src="/img/plus.svg" className="guests-button" onClick={this.addCount} />
    </div>
    <h4 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Letti matrimoniali</h4>
    <div className="counter-host">
        <img src="/img/minus.svg" className="guests-button" onClick={this.subCount} />
            {count}
        <img src="/img/plus.svg" className="guests-button" onClick={this.addCount} />
    </div>
    <h4 style={{marginTop: 0.01 + 'em'}, {textAlign: "center"}}>Divani letto</h4>
    <div className="counter-host">
        <img src="/img/minus.svg" className="guests-button" onClick={this.subCount} />
            {count}
        <img src="/img/plus.svg" className="guests-button" onClick={this.addCount} />
    </div>