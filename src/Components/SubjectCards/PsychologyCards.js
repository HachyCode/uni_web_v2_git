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

const PsychologyCards = () => {
    return (
        <>
        <SubjectsContainer>
        <SubjectsH1>Psychology</SubjectsH1>
        <SubjectsWrapper>

            <SubjectsCard>
            <img src={Bussines} height="100px"/>
            <SubjectsH2>Psychosocial Studies</SubjectsH2>
            <SubjectsP>BA (HONS)</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="100px"/>
            <SubjectsH2>Sociology</SubjectsH2>
            <SubjectsP>BA (HONS)</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="100px"/>
            <SubjectsH2>Therapeutic Counselling</SubjectsH2>
            <SubjectsP>Diploma</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="100px"/>
            <SubjectsH2>Person Centered and CBT Counselling and Psychology (Top-Up)</SubjectsH2>
            <SubjectsP>BA (HONS)</SubjectsP>
            </SubjectsCard>

        </SubjectsWrapper>
        </SubjectsContainer>
        </>
    );
};

export default PsychologyCards;
