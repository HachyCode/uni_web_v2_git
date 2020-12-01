import React, { Component, useState } from 'react';
import Select from 'react-select';

const option1 = [
    {value: '0', label: 'Select Grade'},

    {value: '56', label: 'A*'},
    {value: '48', label: 'A'},
    {value: '40', label: 'B'},
    {value: '32', label: 'C'},
    {value: '24', label: 'D'},
    {value: '16', label: 'E'},
]

class Grade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qualification: "0",
        };
        this.handleChange = this.handleChange.bind(this);
        }
        handleChange(e) {
        console.log("Qualification Selected!!");
        this.setState({ qualification: e.target.value });
    }
    render(){

        if (this.props.qualificationValue == 1)
        {
            return(
                <div>
                    <div className="select-container">
                        <select value={this.state.qualification} onChange={this.handleChange}>
                            {option1.map((option1) => (
                            <option value={option1.value}>{option1.label}</option>
                            ))}
                        </select>
                        <p>{this.state.qualification}</p>
                    </div>
                </div>
            );
        }

        return(
            <div>
                <h1>{this.props.qualificationValue}</h1> 
            </div>
        );

    }
}

export default Grade