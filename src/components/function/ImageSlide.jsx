import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // เพิ่ม CSS
import { Carousel } from 'react-responsive-carousel';
import './ImageSlide.css'; 
// npm install react-responsive-carousel --save

export default function ImageSlide(props) {
    const { url } = props;

    return (
        <div className='container'>
            <Carousel showArrows={true} infiniteLoop={true}>
                {url.map((image, i) => (
                    <div key={i}>
                        <img src={image} alt={`Image ${i}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
