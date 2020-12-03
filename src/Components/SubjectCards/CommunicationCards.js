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

const CommunicationCards = () => {
    return (
        <>
        <SubjectsContainer>
        
        <SubjectsWrapper>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Digital Marketing and Communications</SubjectsH2>
            <SubjectsP>FDA</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Digital Marketing and Communications</SubjectsH2>
            <SubjectsP>BA (HONS)</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Journalism</SubjectsH2>
            <SubjectsP>BA (HONS)</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Media Production</SubjectsH2>
            <SubjectsP>BSC (HONS)</SubjectsP>
            </SubjectsCard>

        </SubjectsWrapper>
        </SubjectsContainer>
        </>
    );
};

export default CommunicationCards;
