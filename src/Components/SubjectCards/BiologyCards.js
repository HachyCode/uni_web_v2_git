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

const BiologyCards = () => {
    return (
        <>
        <SubjectsContainer>
        <SubjectsH1>Biology</SubjectsH1>
        <SubjectsWrapper>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Animal Management (Animal Behaviour and Welfare)</SubjectsH2>
            <SubjectsP>HNC/HND</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Biology Sciences</SubjectsH2>
            <SubjectsP>FDSC</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Biology Sciences</SubjectsH2>
            <SubjectsP>BSC (HONS)</SubjectsP>
            </SubjectsCard>

        </SubjectsWrapper>
        </SubjectsContainer>
        </>
    );
};

export default BiologyCards;
