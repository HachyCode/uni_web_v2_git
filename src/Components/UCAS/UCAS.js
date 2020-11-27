import React from 'react'
import {
    UcasCard,
    TotalPoints,
    Text,
    Amount,
    Select,
    Icon,
    Qualification,
    Grade,
    AddSelection,
} from './UCASElements';

const UCAS = () => {
    return (
        <>
            <UcasCard>
                <TotalPoints><Text>Total Points:</Text><Amount>120</Amount></TotalPoints>
                <Select>
                    <Icon><i class="fas fa-plus-circle"></i></Icon>
                    <Qualification></Qualification>
                    <Grade></Grade>
                </Select>
                <AddSelection><Icon><i class="fas fa-minus-circle"></i></Icon></AddSelection>
            </UcasCard>
        </>
    )
}

export default UCAS
