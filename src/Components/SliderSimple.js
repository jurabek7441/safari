import React from "react";
import Slider from "react-slick";
import HeaderPhoto from "../photo/header_photo.png";
import Header_background from "../photo/header_logo.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderSimple = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="sliderItem">
          <figure className="headerPhoto">
            <img className="headerGirl" src={HeaderPhoto} alt="" />
            <img className="header_bgr" src={Header_background} alt="" />
          </figure>
        </div>
        <div className="sliderItem">
          <figure className="headerPhoto">
            <img className="headerGirl" src={HeaderPhoto} alt="" />
            <img className="header_bgr" src={Header_background} alt="" />
          </figure>
        </div>
        <div className="sliderItem">
          <figure className="headerPhoto">
            <img className="headerGirl" src={HeaderPhoto} alt="" />
            <img className="header_bgr" src={Header_background} alt="" />
          </figure>
        </div>
        <div className="sliderItem">
        <figure className="headerPhoto">
            <img className="headerGirl" src={HeaderPhoto} alt="" />
            <img className="header_bgr" src={Header_background} alt="" />
          </figure>
        </div>
      </Slider>
    </div>
  );
};
