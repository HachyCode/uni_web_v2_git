import React from 'react';
import {Carousel, img,} from 'react-bootstrap'

const Home = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', height: '90vh'}}>
            <Carousel indicators = 'false'>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    />
                    <h3>First slide label</h3>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                    />
                    <h3>Second slide label</h3>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />
                    <h3>Third slide label</h3>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;
