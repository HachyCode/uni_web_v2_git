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

const ConstructionCards = () => {
    return (
        <>
        <SubjectsContainer>
        <SubjectsH1>Construction</SubjectsH1>
        <SubjectsWrapper>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Construction</SubjectsH2>
            <SubjectsP>HNC</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Construction (Architectural Technology)</SubjectsH2>
            <SubjectsP>HND</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Construction (Construction Management)</SubjectsH2>
            <SubjectsP>HNC/HND</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Construction (Surveying)</SubjectsH2>
            <SubjectsP>HNC/HND</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Construction</SubjectsH2>
            <SubjectsP>BSC (HONS)</SubjectsP>
            </SubjectsCard>

        </SubjectsWrapper>
        </SubjectsContainer>
        </>
    );
};

export default ConstructionCards;
