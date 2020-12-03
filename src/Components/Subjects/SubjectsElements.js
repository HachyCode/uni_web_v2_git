import styled from 'styled-components';
import { Link as Link } from 'react-router-dom';

export const SubjectsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 50px 0;

`;

export const SubjectsWrapper = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1090px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const SubjectsCard = styled(Link)`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: auto;
  padding: 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const SubjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  font-weight: 700;
  width: 95vw;
  background: #b2dddf;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SubjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.5rem;
  color: #005c6e;
`;

export const SubjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #005c6e;
`;


