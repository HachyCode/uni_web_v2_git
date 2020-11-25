import styled from 'styled-components';

export const CourseCard = styled.div`
    background: white;
    height: 90vh;
`;

export const CourseDetailse = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr ;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr ;
    }
`;

export const Course = styled.div`
    background: green;
`;
export const CourseImage = styled.div`

`;

export const CourseInfo = styled.div`

`;

export const KeyFacts = styled.div`
    background: yellow;
`;


