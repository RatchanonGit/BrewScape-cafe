import React, { useRef } from 'react';
import Slider from 'react-slick';
//npm install react-slick slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from '../../../data/ProductData'; // นำเข้าข้อมูล products
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import './BestSellerSilde.css'
import '../../Page/Product/Product.css'

const Best_seller_silde = (props) => {
  const { card } = props;
  const sliderRef = useRef(null);

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <AiOutlineLeft onClick={goToPrevSlide} />, // กำหนดปุ่ม "Previous" ที่คุณสร้างเอง
    nextArrow: <AiOutlineRight onClick={goToNextSlide} />, // กำหนดปุ่ม "Next" ที่คุณสร้างเอง
  };

  return (
    <div className='promotion-container'>
      <Slider ref={sliderRef} {...settings}>
        {products
          .filter((item) => item.BestSeller === true)
          .map((item) => card(item))}
      </Slider>
    </div>
  );
};

export default Best_seller_silde;
