import React from 'react';
import {
    SubjectsContainer,
    SubjectsH1,
    SubjectsWrapper,
    SubjectsCard,
    SubjectsIcon,
    SubjectsH2,
    SubjectsP,
} from '../Subjects/SubjectsElements';
import Bussines from '../../Images/Bussines.jpg';

const SportCards = () => {
    return (
        <>
        <SubjectsContainer>
        <SubjectsH1>Sport</SubjectsH1>
        <SubjectsWrapper>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Sport and Exercise Science (in Partnership with Peterborough united foundation)</SubjectsH2>
            <SubjectsP>BSC (HONS)</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Sport and Exercise Science</SubjectsH2>
            <SubjectsP>BSC (HONS)</SubjectsP>
            </SubjectsCard>

        </SubjectsWrapper>
        </SubjectsContainer>
        </>
    );
};

export default SportCards;
