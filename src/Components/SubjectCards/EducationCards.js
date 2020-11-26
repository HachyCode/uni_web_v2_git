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

const EducationCards = () => {
    return (
        <>
        <SubjectsContainer>
        <SubjectsH1>Education</SubjectsH1>
        <SubjectsWrapper>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Early Years and Education</SubjectsH2>
            <SubjectsP>FDA</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Professional Studies (Early Childhood)</SubjectsH2>
            <SubjectsP>FDA</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Professional Studies (Education)</SubjectsH2>
            <SubjectsP>FDA</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Education Studies (Top-Up)</SubjectsH2>
            <SubjectsP>BA (HONS)</SubjectsP>
            </SubjectsCard>

            <SubjectsCard>
            <img src={Bussines} height="200px"/>
            <SubjectsH2>Education, Training and Skills</SubjectsH2>
            <SubjectsP>(Certificate / Professional Graduate Diploma)</SubjectsP>
            </SubjectsCard>

        </SubjectsWrapper>
        </SubjectsContainer>
        </>
    );
};

export default EducationCards;
