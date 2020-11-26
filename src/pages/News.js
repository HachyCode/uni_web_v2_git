import React from 'react';
import {
    SubjectsContainer,
    SubjectsH1,
    SubjectsWrapper,
    SubjectsCard,
    SubjectsH2,
    SubjectsP
} from '../Components/NewsCards/NewsElements';
import '../Components/NewsCards/Icon.css';

const News = () => {
    return (
        <>
        <SubjectsContainer>
        <SubjectsH1>News</SubjectsH1>
        <SubjectsWrapper>

            <SubjectsCard> 
            <i class="fas fa-shield-virus fa-3x"></i>
              <div>
              <SubjectsH2>Acount and Finance</SubjectsH2>
              <SubjectsP>BSC (HONS)</SubjectsP>
              </div>
            </SubjectsCard>

            <SubjectsCard>
            <i class="fas fa-shield-virus fa-3x"></i>
              <div>
              <SubjectsH2>Acount and Finance</SubjectsH2>
              <SubjectsP>BSC (HONS)</SubjectsP>
              </div>
            </SubjectsCard>

            <SubjectsCard>
            <i class="fas fa-shield-virus fa-3x"></i>
              <div>
              <SubjectsH2>Acount and Finance</SubjectsH2>
              <SubjectsP>BSC (HONS)</SubjectsP>
              </div>
            </SubjectsCard>

        </SubjectsWrapper>
        </SubjectsContainer>
        </>
    );
};

export default News;
