import React from 'react';
import {
    SubjectsContainer,
    SubjectsH1,
    SubjectsWrapper,
    SubjectsCard,
    SubjectsH2,
} from '../Components/NewsCards/NewsElements';
import '../Components/NewsCards/Icon.css';

const News = () => {
    return (
        <>
        <SubjectsContainer>
        <SubjectsH1>News</SubjectsH1>
        <SubjectsWrapper>

            <SubjectsCard to='/Corona' activeStyle> 
              <i class="fas fa-shield-virus fa-3x"></i>
              <div>
              <SubjectsH2>Courona Viruse</SubjectsH2>
              </div>
            </SubjectsCard>

            <SubjectsCard>
            <i class="fas fa-info-circle fa-3x"></i>
              <div>
              <SubjectsH2>Open Days</SubjectsH2>
              </div>
            </SubjectsCard>

            <SubjectsCard>
            <i class="fas fa-exclamation-triangle fa-3x"></i>
              <div>
              <SubjectsH2>Virtual 1:1 Sessions</SubjectsH2>
              </div>
            </SubjectsCard>

        </SubjectsWrapper>
        </SubjectsContainer>
        </>
    );
};

export default News;
