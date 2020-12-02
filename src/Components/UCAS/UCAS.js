import React from 'react'
import {
    UcasCard,
    SelectCard,
    Qualification,
} from './UCASElements';
import Grades from './GradeSelection';


const options = [
    { value: '0', label: 'Select Qualification'},
    
    { value: '1', label: 'A-Level' },
    { value: '2', label: 'AS-Level' },

    { value: '3', label: 'Scottish Highers' },
    { value: '4', label: 'Advanced Highers' },

    { value: '5', label: 'BTEC National Extended Certification' },
    { value: '6', label: 'BTEC National Diploma' },
    { value: '7', label: 'BTEC National Extended Diploma' },

    { value: '8', label: '(IB) Diploma Higher Level ' },
    { value: '9', label: '(IB) Diploma Standard Level' },
    { value: '10', label: '(IB) Diploma Extended Essay' },
    { value: '11', label: '(IB) Diploma Theory of Knowledge' },

    { value: '12', label: 'Welsh Baccalaureate' },
]


class UCAS extends React.Component {

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

    render() {
        return (
            <>
            <UcasCard>
                <SelectCard>
                    <Qualification>
                        <select value={this.state.qualification} onChange={this.handleChange}>
                            {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </Qualification>
                    <Grades qualificationValue = {this.state.qualification}/>
                </SelectCard>
            </UcasCard>
        </>
        );
    }
}

export default UCAS
