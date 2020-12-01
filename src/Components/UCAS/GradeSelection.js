import React from 'react';
import Calculate from './Calculate';
import { GradeCard, SelectGrade } from './UCASElements';

const option1 = [
    {value: '0', label: 'Select Grade'},

    {value: '56', label: 'A*'},
    {value: '48', label: 'A'},
    {value: '40', label: 'B'},
    {value: '32', label: 'C'},
    {value: '24', label: 'D'},
    {value: '16', label: 'E'},
]

const option2 = [
    {value: '0', label: 'Select Grade'},

    {value: '20', label: 'A'},
    {value: '16', label: 'B'},
    {value: '12', label: 'C'},
    {value: '10', label: 'D'},
    {value: '6', label: 'E'},
]

const option3 = [
    {value: '0', label: 'Select Grade'},

    {value: '33', label: 'A'},
    {value: '27', label: 'B'},
    {value: '21', label: 'C'},
    {value: '15', label: 'D'},
]

const option4 = [
    {value: '0', label: 'Select Grade'},

    {value: '56', label: 'A'},
    {value: '48', label: 'B'},
    {value: '40', label: 'C'},
    {value: '32', label: 'D'},
]

const option5 = [
    {value: '0', label: 'Select Grade'},

    {value: '56', label: 'D*'},
    {value: '48', label: 'D'},
    {value: '32', label: 'M'},
    {value: '16', label: 'P'},
]

const option6 = [
    {value: '0', label: 'Select Grade'},

    {value: '112', label: 'D*D*'},
    {value: '104', label: 'D*D'},
    {value: '96', label: 'DD'},
    {value: '80', label: 'DM'},
    {value: '64', label: 'MM'},
    {value: '48', label: 'MP'},
    {value: '32', label: 'PP'},
]

const option7 = [
    {value: '0', label: 'Select Grade'},

    {value: '168', label: 'D*D*D*'},
    {value: '160', label: 'D*D*D'},
    {value: '152', label: 'D*DD'},
    {value: '144', label: 'DDD'},
    {value: '128', label: 'DDM'},
    {value: '112', label: 'DMM'},
    {value: '96', label: 'MMM'},
    {value: '80', label: 'MMP'},
    {value: '64', label: 'MPP'},
    {value: '48', label: 'PPP'},
]

const option8 = [
    {value: '0', label: 'Select Grade'},

    {value: '56', label: 'H7'},
    {value: '48', label: 'H6'},
    {value: '32', label: 'H5'},
    {value: '24', label: 'H4'},
    {value: '12', label: 'H3'},
]

const option9 = [
    {value: '0', label: 'Select Grade'},

    {value: '28', label: 'S7'},
    {value: '24', label: 'S6'},
    {value: '16', label: 'S5'},
    {value: '12', label: 'S4'},
    {value: '6', label: 'S3'},
]

const option10 = [
    {value: '0', label: 'Select Grade'},

    {value: '12', label: 'A'},
    {value: '10', label: 'B'},
    {value: '8', label: 'C'},
    {value: '6', label: 'D'},
    {value: '4', label: 'E'},
]

const option11 = [
    {value: '0', label: 'Select Grade'},

    {value: '12', label: 'A'},
    {value: '10', label: 'B'},
    {value: '8', label: 'C'},
    {value: '6', label: 'D'},
    {value: '4', label: 'E'},
]

const option12 = [
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
                    <GradeCard>
                        <SelectGrade>
                            <select value={this.state.qualification} onChange={this.handleChange}>
                                {option1.map((option1) => (
                                <option value={option1.value}>{option1.label}</option>
                                ))}
                            </select>
                        </SelectGrade>
                        <Calculate grade = {this.state.qualification}/>
                    </GradeCard>
                </div>
            );
        }

        if (this.props.qualificationValue == 2)
            {
                return(
                    <div>
                        <GradeCard>
                            <SelectGrade>
                                <select value={this.state.qualification} onChange={this.handleChange}>
                                    {option2.map((option2) => (
                                    <option value={option2.value}>{option2.label}</option>
                                    ))}
                                </select>
                            </SelectGrade>
                            <Calculate grade = {this.state.qualification}/>
                        </GradeCard>
                    </div>
                );
            }

            if (this.props.qualificationValue == 3)
            {
                return(
                    <div>
                        <GradeCard>
                            <SelectGrade>
                                <select value={this.state.qualification} onChange={this.handleChange}>
                                    {option3.map((option3) => (
                                    <option value={option3.value}>{option3.label}</option>
                                    ))}
                                </select>
                            </SelectGrade>
                            <Calculate grade = {this.state.qualification}/>
                        </GradeCard>
                    </div>
                );
            }

            if (this.props.qualificationValue == 4)
            {
                return(
                    <div>
                        <GradeCard>
                            <SelectGrade>
                                <select value={this.state.qualification} onChange={this.handleChange}>
                                    {option4.map((option4) => (
                                    <option value={option4.value}>{option4.label}</option>
                                    ))}
                                </select>
                            </SelectGrade>
                            <Calculate grade = {this.state.qualification}/>
                        </GradeCard>
                    </div>
                );
            }

            if (this.props.qualificationValue == 5)
            {
                return(
                    <div>
                        <GradeCard>
                            <SelectGrade>
                                <select value={this.state.qualification} onChange={this.handleChange}>
                                    {option5.map((option5) => (
                                    <option value={option5.value}>{option5.label}</option>
                                    ))}
                                </select>
                            </SelectGrade>
                            <Calculate grade = {this.state.qualification}/>
                        </GradeCard>
                    </div>
                );
            }

            if (this.props.qualificationValue == 6)
            {
                return(
                    <div>
                        <GradeCard>
                            <SelectGrade>
                                <select value={this.state.qualification} onChange={this.handleChange}>
                                    {option6.map((option6) => (
                                    <option value={option6.value}>{option6.label}</option>
                                    ))}
                                </select>
                            </SelectGrade>
                            <Calculate grade = {this.state.qualification}/>
                        </GradeCard>
                    </div>
                );
            }

            if (this.props.qualificationValue == 7)
            {
                return(
                    <div>
                        <GradeCard>
                            <SelectGrade>
                                <select value={this.state.qualification} onChange={this.handleChange}>
                                    {option7.map((option7) => (
                                    <option value={option7.value}>{option7.label}</option>
                                    ))}
                                </select>
                            </SelectGrade>
                            <Calculate grade = {this.state.qualification}/>
                        </GradeCard>
                    </div>
                );
            }

            if (this.props.qualificationValue == 8)
            {
                return(
                    <div>
                        <GradeCard>
                            <SelectGrade>
                                <select value={this.state.qualification} onChange={this.handleChange}>
                                    {option8.map((option8) => (
                                    <option value={option8.value}>{option8.label}</option>
                                    ))}
                                </select>
                            </SelectGrade>
                            <Calculate grade = {this.state.qualification}/>
                        </GradeCard>
                    </div>
                );
            }

            if (this.props.qualificationValue == 9)
            {
                return(
                    <div>
                        <GradeCard>
                            <SelectGrade>
                                <select value={this.state.qualification} onChange={this.handleChange}>
                                    {option9.map((option9) => (
                                    <option value={option9.value}>{option9.label}</option>
                                    ))}
                                </select>
                            </SelectGrade>
                            <Calculate grade = {this.state.qualification}/>
                        </GradeCard>
                    </div>
                );
            }

            if (this.props.qualificationValue == 10)
            {
                return(
                    <div>
                        <GradeCard>
                            <SelectGrade>
                                <select value={this.state.qualification} onChange={this.handleChange}>
                                    {option10.map((option10) => (
                                    <option value={option10.value}>{option10.label}</option>
                                    ))}
                                </select>
                            </SelectGrade>
                            <Calculate grade = {this.state.qualification}/>
                        </GradeCard>
                    </div>
                );
            }

            if (this.props.qualificationValue == 11)
            {
                return(
                    <div>
                        <GradeCard>
                            <SelectGrade>
                                <select value={this.state.qualification} onChange={this.handleChange}>
                                    {option11.map((option11) => (
                                    <option value={option11.value}>{option11.label}</option>
                                    ))}
                                </select>
                            </SelectGrade>
                            <Calculate grade = {this.state.qualification}/>
                        </GradeCard>
                    </div>
                );
            }

            if (this.props.qualificationValue == 12)
            {
                return(
                    <div>
                        <GradeCard>
                            <SelectGrade>
                                <select value={this.state.qualification} onChange={this.handleChange}>
                                    {option12.map((option12) => (
                                    <option value={option12.value}>{option12.label}</option>
                                    ))}
                                </select>
                            </SelectGrade>
                            <Calculate grade = {this.state.qualification}/>
                        </GradeCard>
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