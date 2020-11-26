import styled from 'styled-components';

export const SubjectsContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

`;

export const SubjectsWrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const SubjectsCard = styled.div`
  background: #31b7bc;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  grid-column-gap: 10px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const SubjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SubjectsH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
  color: #fff;
`;

export const SubjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
