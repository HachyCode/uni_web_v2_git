import styled from 'styled-components';


export const Card = styled.div`
    min-height: 51vh;
    background: #1b1e23;
    display: grid;
    align-items: center;
    justify-content: center;
`
export const UcasCard = styled.div`
    background: white;
    height: auto;
    align-items: center;
    justify-content: center;

    background: #1b1e23;
    color: #fff;
`;
export const SelectCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 40px;
    }
`;
export const Qualification = styled.div`
    color: #000;
    align-items: center;
    justify-content: center;
    display:flex;
    padding: 20px;
`;

export const GradeCard  = styled.div`
    display:flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }

`;
export const SelectGrade  = styled.div`
    padding: 20px;
`;