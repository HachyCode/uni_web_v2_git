import React from 'react';
import {
    SubjectsContainer,
    SubjectsH1,
    SubjectsWrapper,
    SubjectsCard,
    SubjectsH2,
    SubjectsP,
} from '../Subjects/SubjectsElements';
import DigitalArt from '../../Images/DigitalArts.jpg';

const ArtsCards = () => {
    return (
        <>
        <SubjectsContainer>
        <SubjectsH1>Arts</SubjectsH1>
        <SubjectsWrapper>

            <SubjectsCard to='/DigitalArts' activeStyle>
            <img src={DigitalArt} height="200px"/>
            <SubjectsH2>Digital Arts</SubjectsH2>
            <SubjectsP>FDA</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={DigitalArt} height="200px"/>
            <SubjectsH2>Performing Arts</SubjectsH2>
            <SubjectsP>BA (HONS)</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={DigitalArt} height="200px"/>
            <SubjectsH2>Performing Arts (Dance)</SubjectsH2>
            <SubjectsP>HND</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={DigitalArt} height="200px"/>
            <SubjectsH2>Performing Arts (Musical Theatre)</SubjectsH2>
            <SubjectsP>HND</SubjectsP>
            </SubjectsCard>

        </SubjectsWrapper>
        </SubjectsContainer>
        </>
    );
};

export default ArtsCards;
