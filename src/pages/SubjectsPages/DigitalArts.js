import React from 'react'
import {
    Course, 
    KeyFacts, 
    CourseCard,
    CourseImage,
    CourseDetailse,
    CourseInfo
} from './CourseElements';
import Bussines from '../../Images/Bussines.jpg';

const DigitalArts = () => {
    return (
        <>
        <CourseCard>
            <CourseDetailse>
                <CourseImage>
                    <img src={Bussines} className=""/>
                </CourseImage>
                <Course>
                    <h1>FDA Digital Arts</h1>
                </Course>
            </CourseDetailse>

            <CourseInfo>
                <KeyFacts>
                    <h2>HI</h2>
                </KeyFacts>
            </CourseInfo>

        </CourseCard>
        </>
    )
}

export default DigitalArts
