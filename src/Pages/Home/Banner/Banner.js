import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/banner24.jpg';
import banner2 from '../../../images/banner25.jpg';
import banner3 from '../../../images/banner26.jpg';

const Banner = () => {
    return (
        <div className="banner_text">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner1}
                        alt="First slide"

                    />
                    <Carousel.Caption>
                        <h1 className="">Critical Care Centrer</h1>
                        <p className="banner_info fw-bolder banner_headline">High Innovation Professional Eye Care</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid "
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="">Critical Care Centrer</h1>
                        <p className="banner_info fw-bolder banner_headline">Eye Specialist That You Can Trust</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="">Critical Care Centrer</h1>
                        <p className="banner_info fw-bolder banner_headline">We only Give Best Care To Your Eyes</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};


export default Banner;