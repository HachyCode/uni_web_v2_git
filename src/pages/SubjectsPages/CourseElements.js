import styled from 'styled-components';

export const CourseCard = styled.div`
    background: white;
    height: 2000px;
`;

export const CourseDetailse = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr ;

    @media screen and (max-width: 1300px) {
        grid-template-columns: 1fr ;
    }
`;

export const ImageCard = styled.div`
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const CourseImage = styled.img`
    width: auto;
    height: 400px;

    @media screen and (max-width: 700px) {
        width: 90vw;
        height: auto;
    }
`;

export const CourseInfo = styled.div`
    background: white;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;


    @media screen and (max-width: 1300px) {
        padding: 0px;
    }
`;

export const Course = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 16px;

    @media screen and (max-width: 1300px) {
        grid-template-columns: 1fr 2fr;
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr 3fr;
    }
`;
export const CourseType = styled.h1`
    font-size: 1.5rem;
    background: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CourseName = styled.h1`
    font-size: 4rem;
    text-decoration: underline;
    text-decoration-color: lightblue;

    @media screen and (max-width: 700px) {
        font-size: 3rem;
    }
`;

export const CourseMore = styled.div`
    padding: 5px 10px;
    font-size: 1.5rem;

    @media screen and (max-width: 700px) {
        font-size: 1.3rem;
    }
`;
export const UcasCode = styled.div`
    display: flex;
`;
export const H3 = styled.div`
`;
export const H2 = styled.div`
    padding: 0px 10px;
    font-style: oblique;
`;

export const InstitutionCode = styled.div`
display: flex;
`;
export const AccreditedBy = styled.div`
display: flex;
`;

export const CourseOtherInfo = styled.div`

`;

export const KeyFacts = styled.div`
    background: yellow;
    height: 400px;
`;


