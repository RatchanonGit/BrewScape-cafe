import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './ImageSlide.css'; 
// npm install react-responsive-carousel --save

export default function ImageSlide(props) {
    const { url } = props;

    return (
        <div className='ImageSlide-container'>
            <Carousel showArrows={true} infiniteLoop={true}>
                {url.map((image, i) => (
                    <div key={i}>
                        <img src={image} alt="" />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
