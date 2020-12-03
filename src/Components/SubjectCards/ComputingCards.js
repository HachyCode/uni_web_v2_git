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

const ComputingCards = () => {
    return (
        <>
        <SubjectsContainer>
        
        <SubjectsWrapper>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Computing</SubjectsH2>
            <SubjectsP>HND</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Computing and Information System</SubjectsH2>
            <SubjectsP>FDSC</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Computing and Information System</SubjectsH2>
            <SubjectsP>BSC (HONS)</SubjectsP>
            </SubjectsCard>

        </SubjectsWrapper>
        </SubjectsContainer>
        </>
    );
};

export default ComputingCards;
