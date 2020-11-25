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

const CriminologyCards = () => {
    return (
        <>
        <SubjectsContainer>
        <SubjectsH1>Criminology</SubjectsH1>
        <SubjectsWrapper>

            <SubjectsCard>
            <img src={Bussines} height="100px"/>
            <SubjectsH2>Forensic Investion</SubjectsH2>
            <SubjectsP>FDSC</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="100px"/>
            <SubjectsH2>Forensic Investion</SubjectsH2>
            <SubjectsP>BSC (HONS)</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="100px"/>
            <SubjectsH2>Criminology</SubjectsH2>
            <SubjectsP>BSC (HONS)</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="100px"/>
            <SubjectsH2>History and Archaeology</SubjectsH2>
            <SubjectsP>BSC (HONS)</SubjectsP>
            </SubjectsCard>

        </SubjectsWrapper>
        </SubjectsContainer>
        </>
    );
};

export default CriminologyCards;
