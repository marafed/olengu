import React, { Component } from 'react';
import Checkbox from './Checkbox';
import InsertItem from '../Pages/InsertItem';

const OPTIONS = [ "Wifi", "Asciugacapelli", "Lavatrice"];

class InsertItemChecklist extends Component {
    state = {
        checkboxes: OPTIONS.reduce(
            (options, option) => ({
                ...options, 
                [option]: false
            }),
            {}
        )
    };

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;
    
        this.setState(prevState => ({
        checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
        }
        }));
    };   
    
    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    
        Object.keys(this.state.checkboxes)
        .filter(checkbox => this.state.checkboxes[checkbox])
        .forEach(checkbox => {
            console.log(checkbox, "is selected.");
        });
    };

    createCheckbox = option => (
        <Checkbox 
            label={option}
            isSelected={this.state.checkboxes[option]}
            onCheckboxChange={this.handleCheckboxChange}
            key={option}
        />
    );

    createCheckboxes = () => OPTIONS.map(this.createCheckbox);

    render() {
        return(
            <div className="Checklist">
                <h2></h2>
                {this.createCheckboxes()}
            </div>
        );
    }
}
export default InsertItemChecklist;
