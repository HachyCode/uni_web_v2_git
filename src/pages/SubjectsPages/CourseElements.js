import styled from 'styled-components';

export const CourseCard = styled.div`
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
    background: #b2dddf;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CourseName = styled.h1`
    font-size: 4rem;
    text-decoration: underline;
    text-decoration-color: #b2dddf;

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
    font-weight: 600;
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
    height: 600px;
    background: #1b1e23;

    @media screen and (max-width: 1300px) {
        margin: 10px 0;
    }
`;
export const TopCard = styled.div`
    background: #b2dddf;
    font-size: 2rem;
`;
export const TextCard = styled.div`
    
`;

export const Icon = styled.div`

`;
export const Text = styled.div`
    font-size: 1.2rem;
`;
export const Title = styled.div`
    font-weight: 700;
    font-size: 1.4rem;
`;
export const PInfo = styled.div`

`;

export const Location = styled.div`
    background: #ededed;
    padding: 10px;
`;
export const Duration = styled.div`
    background: #1b1e23;
    padding: 10px;
`;
export const StartDates = styled.div`
    background: #000;
    padding: 10px;
`;
export const TuitionFees = styled.div`
    background: #888;
    padding: 10px;
`;
export const EntryRequiremts = styled.div`
    background: #999;
    padding: 10px;
`;