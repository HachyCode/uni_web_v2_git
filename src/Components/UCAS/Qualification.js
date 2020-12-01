import React, { Component, useState, useEffect, useRef  } from 'react'

const options = [
    { value: '1', label: 'A-Level' },
    { value: '2', label: 'AS-Level' },

    { value: '3', label: 'A-Level Double Award' },
    { value: '4', label: 'AS-Level Double Award' },

    { value: '5', label: 'IBO Certification in Theory of Knowledge' },
    { value: '6', label: 'IBO Certification in Standard Level' },
    { value: '7', label: 'IBO Certification in Higher Level' },
    { value: '8', label: 'IBO Certification in Extended Essay' },

    { value: '9', label: 'Scottish Higher' },
    { value: '10', label: 'Scottish Advanced Higher' },

    { value: '11', label: 'OCR National Extended Diploma' },
    { value: '12', label: 'OCR National Diploma' },
    { value: '13', label: 'OCR National Certificate' },

    { value: '14', label: 'Edexel BTEC National Award' },
    { value: '15', label: 'Edexel BTEC National Certification' },
    { value: '16', label: 'Edexel BTEC National Diploma' },

    { value: '17', label: 'T Level' },
]

class SelectQualification extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            qualification: "2",
        };

        this.handleChange = this.handleChange.bind(this);
        }

        handleChange(e) {
        console.log("Qualification Selected!!");
        this.setState({ qualification: e.target.value });
    }

    render() {
        return (
        <div id="App">
            <div className="select-container">
            <select value={this.state.qualification} onChange={this.handleChange}>
                {options.map((option) => (
                <option value={option.value}>{option.label}</option>
                ))}
            </select>
            <p>{this.state.qualification}</p>
            </div>
        </div>
        );
    }
}


export default SelectQualification
