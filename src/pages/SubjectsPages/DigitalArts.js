import React from 'react'
import {
    Course, 
    KeyFacts, 
    CourseCard,
    CourseImage,
    CourseDetailse,
    CourseInfo,
    ImageCard,
    CourseType,
    CourseName,
    CourseMore,
    UcasCode,
    InstitutionCode,
    AccreditedBy,
    CourseOtherInfo,
    H3,
    H2
} from './CourseElements';
import DigitalArt from '../../Images/DigitalArts.jpg';
import ScrollToTop from '../../Components/ScrollToTop';

const DigitalArts = () => {
    return (
        <>
        <ScrollToTop/>
        <CourseCard>
            <CourseDetailse>
                <ImageCard>
                    <CourseImage src={DigitalArt}/>
                </ImageCard>
                <CourseInfo>
                    <Course>
                        <CourseType>FDA</CourseType>
                        <CourseName>Digital Arts</CourseName>
                    </Course>
                    <CourseMore>
                        <UcasCode><H3>Ucas Code:</H3><H2>GG45</H2></UcasCode>
                        <InstitutionCode><H3>Institution Code:</H3><H2>P56</H2></InstitutionCode>
                        <AccreditedBy><H3>Accredited By:</H3><H2>Anglia Ruskin University</H2></AccreditedBy>
                    </CourseMore>
                </CourseInfo>
            </CourseDetailse>

            <CourseOtherInfo>
                <KeyFacts>HI</KeyFacts>
            </CourseOtherInfo>

        </CourseCard>
        </>
    )
}

export default DigitalArts
