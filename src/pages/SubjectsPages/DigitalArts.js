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
    H2,
    TopCard,
    LeftCard,
    Location,
    Icon,
    Text,
    Title,
    PInfo,
    Duration,
    StartDates,
    TuitionFees,
    RightCard,
    EntryRequiremts
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
                <KeyFacts>
                    <TopCard>KEY FACTS</TopCard>
                    <LeftCard>
                        <Location>
                            <Icon/>
                            <Text>
                                <Title>Location</Title>
                                <PInfo>
                                    University Centre Peterborough (90%)
                                </PInfo>
                                <PInfo>
                                    Peterborough Regional College (10%)
                                </PInfo>
                            </Text>
                        </Location>
                        <Duration>
                            <Icon/>
                            <Text>
                                <Title>Duration and delivery</Title>
                                <PInfo>
                                2 years full-time (2 full days a week over two semesters per year)
                                </PInfo>
                                <PInfo>
                                3 years part-time (1-2 full days a week over two semesters per year - 90 credits in years 1 & 2 and 60 credits in year 3)
                                </PInfo>
                            </Text>
                        </Duration>
                        <StartDates>
                            <Icon/>
                            <Text>
                                <Title>Start dates</Title>
                                <PInfo>
                                    w/c 16th September 2019
                                </PInfo>
                                <PInfo>
                                    or w/c 27th January 2020
                                </PInfo>
                            </Text>
                        </StartDates>
                        <TuitionFees>
                            <Icon/>
                            <Text>
                                <Title>UK/EU tuition fees</Title>
                                <PInfo>
                                    £8,000 per year when studied full-time.)
                                </PInfo>
                                <PInfo>
                                    Fees for part-time study are pro rata depending on the number of credits you are studying (i.e. 60 credits per year will be 50% of the tuition fee). 
                                </PInfo>
                            </Text>
                        </TuitionFees>
                    </LeftCard>
                    <RightCard>
                        <EntryRequiremts>
                            <Icon/>
                            <Text>
                                <Title>Entry requirements</Title>
                                <PInfo>
                                    48 UCAS points:
                                        ■ A-levels
                                        ■ BTEC Level 3 National Diploma
                                        ■ Cambridge Technicals Level 3
                                        ■ IB Diploma
                                        ■ Access to HE
                                </PInfo>
                                <PInfo>
                                    You must have GCSEs English and Mathematics
                                    at grade C or above or grade 4 or above.
                                    We accept A-level General Studies and AS-levels
                                    when combined with other full qualifications.
                                    If English is not your first language you will require
                                    IELTS score of 6.0 (with 5.5 minimum in each skill)
                                    or an equivalent English Language qualification.
                                </PInfo>
                            </Text>
                        </EntryRequiremts>
                    </RightCard>
                </KeyFacts>
            </CourseOtherInfo>
        </CourseCard>
        </>
    )}

export default DigitalArts
