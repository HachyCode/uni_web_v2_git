import React from 'react'
import {
    UcasCard,
    TotalPoints,
    Text,
    Amount,
    Select,
    Icon,
    Qualification,
    AddSelection,
} from './UCASElements';
import SelectQualification from './Qualification';
import Grade from './GradeSelection';
import { traverseTwoPhase } from 'react-dom/test-utils';


const UCAS = () => {
    return (
        <>
            <UcasCard>
                <TotalPoints><Text>Total Points:</Text><Amount>120</Amount></TotalPoints>
                <Select>
                    <Icon><i class="fas fa-plus-circle fa-2x"></i></Icon>
                    <Qualification>
                        <SelectQualification/>
                    </Qualification>
                    <Grade/>
                </Select>
                <AddSelection><Icon><i class="fas fa-minus-circle fa-2x"></i></Icon></AddSelection>
            </UcasCard>
        </>
    )
}

export default UCAS
