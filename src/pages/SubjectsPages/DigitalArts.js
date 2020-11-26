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
    TextCard,
    Icon,
    Text,
    Title,
    PInfo,
    BottomCards,
    MiddleCards,
    InfoCard,
    PlaneCard
} from './CourseElements';
import DigitalArt from '../../Images/DigitalArts.jpg';
import ScrollToTop from '../../Components/ScrollToTop';
import CourseLeader from '../../Images/Peter_Wright.jpg';

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
                <InfoCard>
                    <TopCard>KEY FACTS</TopCard>
                    <TextCard>
                        <MiddleCards>
                            <Icon><i class="fas fa-map-marker-alt fa-2x"></i></Icon>
                            <Text>
                                <Title>Location</Title>
                                <PInfo>
                                    University Centre Peterborough (90%)
                                </PInfo>
                                <PInfo>
                                    Peterborough Regional College (10%)
                                </PInfo>
                            </Text>
                        </MiddleCards>

                        <MiddleCards>
                            <Icon><i class="fas fa-stopwatch fa-2x"></i></Icon>
                            <Text>
                                <Title>Duration and delivery</Title>
                                <PInfo>
                                2 years full-time (2 full days a week over two semesters per year)
                                </PInfo>
                                <PInfo>
                                3 years part-time (1-2 full days a week over two semesters per year - 90 credits in years 1 & 2 and 60 credits in year 3)
                                </PInfo>
                            </Text>
                        </MiddleCards>

                        <MiddleCards>
                            <Icon><i class="far fa-calendar-alt fa-2x"></i></Icon>
                            <Text>
                                <Title>Start dates</Title>
                                <PInfo>
                                    w/c 16th September 2019
                                </PInfo>
                                <PInfo>
                                    or w/c 27th January 2020
                                </PInfo>
                            </Text>
                        </MiddleCards>

                        <MiddleCards>
                            <Icon><i class="fas fa-pound-sign fa-2x"></i></Icon>
                            <Text>
                                <Title>UK/EU tuition fees</Title>
                                <PInfo>
                                    £8,000 per year when studied full-time.)
                                </PInfo>
                                <PInfo>
                                    Fees for part-time study are pro rata depending on the number of credits you are studying (i.e. 60 credits per year will be 50% of the tuition fee). 
                                </PInfo>
                            </Text>
                        </MiddleCards>

                        <BottomCards>
                            <Icon><i class="fas fa-clipboard-list fa-2x"></i></Icon>
                            <Text>
                                <Title>Entry requirements</Title>
                                <PInfo>
                                    48 UCAS points: A-levels, BTEC Level 3 National Diploma, Cambridge Technicals Level 3, IB Diploma, Access to HE
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
                        </BottomCards>
                    </TextCard>
                </InfoCard>

                <InfoCard>
                    <TopCard>COURSE OVERVIEW</TopCard>
                    <PlaneCard>
                        <PInfo>The Foundation Diploma in Digital Arts is a two-year programme that offers a quick route into the digital and creative industries. The course is aimed at students with creative talents seeking to develop professionalstandard skills to work in the creative and digital sectors. The digital and creative sectors have been identified as growing sectors both regionally and nationally. Our intention in creating this course is to address this need by providing you with the skills and support to launch your career as a creative practitioner in one of the many occupations available in the creative and digital industries.</PInfo>
                        <PInfo>On the course you will be introduced to the basic principles of graphic design, animation and photography as well as learning new design technologies like app and computer games design. You will learn about the central debates and discourses that inform contemporary digital art and design and understand the industry in which you will work. You will learn to crucially appraise your own work and the work of others, in a constructive and productive way.</PInfo>
                        <PInfo>You will have the opportunity to do a 120 hour (three week) work placement with a design agency or media organisation and/or work on an industry commission. You will have the opportunity to work creatively and problemsolve in a group in ‘live’ projects and real-world briefs. The course culminates with a number of capstone modules that will enable you to showcase your talents and get feedback for your ideas from industry professionals.</PInfo>
                        <PInfo>Throughout the course you will be supported in developing your professional profile and your entrepreneurial skills to ensure a smooth transition to professional employment. All students completing the course will have a portfolio of work (physical and digital) to show to prospective employers and you will have multiple opportunities on the course to develop your network of professional contacts.</PInfo>
                    </PlaneCard>
                </InfoCard>

                <InfoCard>
                    <TopCard>COURSE MODULES</TopCard>
                    <PlaneCard>
                        <PInfo>You must take modules worth 120 credits at each level of the course. Each module is worth a specified number of credits.</PInfo>

                        <Title>Year one for full-time students (Level 4)</Title>
                        <PInfo>■ Graphic Design (30 credits)</PInfo>
                        <PInfo>■ Photography (15 credits)</PInfo>
                        <PInfo>■ Critical Theory in Art and Media (15 credits)</PInfo>
                        <PInfo>■ Digital Animation (15 credits)</PInfo>
                        <PInfo>■ Introduction to the Creative Industries (15 credits)</PInfo>
                        <PInfo>■ Digital Asset Development (15 credits)</PInfo>
                        <PInfo>■ Web Design and Authoring (15 credits)</PInfo>
                        <PInfo></PInfo>

                        <Title>Final year for full-time students (Level 5)</Title>
                        <PInfo>■ Critical Practices of Art and Design (15 credits)</PInfo>
                        <PInfo>■ Computer Games Design (30 credits)</PInfo>
                        <PInfo>■ App Design (15 credits)</PInfo>
                        <PInfo>■ Integrated Advertising (30 credits)</PInfo>
                        <PInfo>■ Professional Practice and Development (30 credits) - with 120 hour work placement</PInfo>
                    </PlaneCard>
                </InfoCard>

                <InfoCard>
                    <TopCard>ASSESSMENT</TopCard>
                    <PlaneCard>
                        <PInfo>Throughout the duration of your course you will be assessed by the following methods:</PInfo>
                        <PInfo>■ Coursework</PInfo>
                        <PInfo>■ Essays</PInfo>
                        <PInfo>■ Reports</PInfo>
                        <PInfo>■ Portfolio</PInfo>
                        <PInfo>■ Reflective log book</PInfo>
                        <PInfo>■ Presentation/oral assessment</PInfo>
                        <PInfo>■ Work based assessment</PInfo>
                        <PInfo>■ Written assessment</PInfo>
                    </PlaneCard>
                </InfoCard>

                <InfoCard>
                    <TopCard>CARREERS AND EMPLOYABILITY</TopCard>
                    <PlaneCard>
                        <PInfo>This course is aimed at creative individuals who want to work in the digital and cultural industries. It has been designed to address the shortage in skills, both locally and nationally, for creative digital arts practitioners. We consulted extensively with industry in the creation of this course to ensure that the skills and competencies developed are current and industry-standard. The result is a unique and ambitious course that will provide you with the environment to develop as a creative practitioner, while at the same time equipping you with the skills and competencies needed to succeed in the creative and digital industries. Students completing the course are expecting to go on to careers as graphic designers, animators. App and games designers, photographers, digital content providers and advertising campaign managers.</PInfo>
                        <PInfo>To help launch you on your chosen career path you will be supported in developing your professional profile and digital portfolio. Every student will complete the course with a portfolio of work (both digital and physical) to present to prospective employers. You will also have the opportunity to develop your professional network through live projects and centre-wide employability events. </PInfo>
                        <PInfo>Finally you will have the opportunity to do a 120 hour work placement with a local design agency or media organisation.</PInfo>
                    </PlaneCard>
                </InfoCard>

                <InfoCard>
                    <TopCard>COURSE LEADER</TopCard>
                        <ImageCard>
                        <CourseImage src={CourseLeader}/>
                        </ImageCard>

                        <PlaneCard>
                        <PInfo>I am the Course Leader for the FdA Digital Arts degree at University Centre Peterborough.  I studied a BSc (Hons) at Sheffield Hallam University in Design and Technology and during my course I specialised in Graphic Design and Control Systems.</PInfo>
                        <PInfo>After graduating I taught both graphics and control systems in local schools and for Her Majesty's Prison Service before for joining University Centre Peterborough in 2016.</PInfo>
                        <PInfo>During the development of the FdA Digital Arts, I have lectured on the BSc (Hons) Computing and Information Systems and BA (Hons) Media Production degree programmes at University Centre Peterborough, including modules on:</PInfo>

                        <PInfo>■ Digital Asset Development </PInfo>
                        <PInfo>■ Digital Media Practice and Creative Computing </PInfo>
                        <PInfo>■ Maths for Computing</PInfo>
                        <PInfo>■ Multiple Computer Networking Modules from Level 4-6 </PInfo>
                        <PInfo>■ Undergraduate Major Project</PInfo>

                        <PInfo>I have a keen interest in graphic design but also emerging technology and how a creative mind mixed with technical knowhow can push the boundaries on how we view, and interact with the world around us.</PInfo>
                        <PInfo>Following this interest, I am currently studying a MSc Computer Science at University of Hertfordshire, which is focusing on the design and development of E-learning platforms.  This training not only benefits students at University Centre Peterborough but I will also be working alongside the National STEM centre creating and delivering CPD to teachers in STEM subject.</PInfo>
                        <PInfo>Having worked in education locally my whole career I have seen many students achieve their ambition and move into their chosen career, including seeing a student graduate from University Centre Peterborough having first taught them as a year 7 student during my first year as a teacher. I am now using this experience and contacts with in the local area in shape the FdA Digital Arts into a degree valued by employers.</PInfo>
                        <PInfo>You will also see me outside of lectures, around campus participating in a societies and joining events, and shaping the future of University Centre Peterborough as part of the Higher Education Academic Board.</PInfo>

                        <Title>Qualifications</Title>
                        <PInfo>■ MSc Computer Science, University of Hertfordshire (currently studying)</PInfo>
                        <PInfo>■ BSc (Hons) Design and Technology, Sheffield Hallam University</PInfo>
                    </PlaneCard>
                </InfoCard>
            </CourseOtherInfo>
        </CourseCard>
        </>
    )}

export default DigitalArts
