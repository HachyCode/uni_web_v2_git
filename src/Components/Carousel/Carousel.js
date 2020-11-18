import React from 'react';
import {Carousel, img,} from 'react-bootstrap'
import {CarouselCard} from './CarouselElements';
import carousel_1 from '../../Images/Carousel_1.png';
import carousel_2 from '../../Images/Carousel_2.png';
import carousel_3 from '../../Images/Carousel_3.png';

const CarouselIndex = () => {
    return (
        <div>
            <CarouselCard>
                <Carousel indicators = {false} fade = {true}>
                    <Carousel.Item interval={100000}>
                        <img
                        className="d-inline w-100"
                        src={carousel_1}
                        alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item interval={1000000}>
                        <img
                        className="d-inline w-100"
                        src={carousel_2}
                        alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item interval={1000000}>
                        <img
                        className="d-flex w-100"
                        src={carousel_3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </CarouselCard>
        </div>
    );
};

export default CarouselIndex
