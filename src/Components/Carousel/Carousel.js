import React from 'react';
import {Carousel} from 'react-bootstrap';
import carousel_1 from '../../Images/Carousel_1.png';
import carousel_2 from '../../Images/Carousel_2.png';
import carousel_3 from '../../Images/Carousel_3.png';

const CarouselIndex = () => {
    return (
        <div className="d-flex justify-content-center" style={{width: '100vw', background: '#005c6e'}}>
            <Carousel indicators = {false} fade = {true}>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={carousel_1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={carousel_2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={carousel_3}
                    alt="Third slide"
                    />
                </Carousel.Item>

                @media
            </Carousel>
        </div>
    );
};

export default CarouselIndex
