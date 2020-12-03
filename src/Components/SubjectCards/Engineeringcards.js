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

const EngineeringCards = () => {
    return (
        <>
        <SubjectsContainer>
        
        <SubjectsWrapper>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Engineering (Electrical and Electronic)</SubjectsH2>
            <SubjectsP>HNC</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Engineering (Manufacturing)</SubjectsH2>
            <SubjectsP>HNC/HND</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Engineering (Mechanical)</SubjectsH2>
            <SubjectsP>HNC</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Electrical and Electronic Control System Engineering</SubjectsH2>
            <SubjectsP>BENG (HONS)</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Mechanical and Manufacturing Engineering</SubjectsH2>
            <SubjectsP>BENG (HONS)</SubjectsP>
            </SubjectsCard>

        </SubjectsWrapper>
        </SubjectsContainer>
        </>
    );
};

export default EngineeringCards;
