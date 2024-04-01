import React from "react";
import banner from "../../assets/banner.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  let settings = {
    arrows: true,
    dots: true,
    pauseOnHover: false,
    infinite: true,
    // speed: 5000,
    autoplay: true,
    fade: false,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="banner">
        <div className="flex justify-center h-[50vh] text-center flex-col">
          {" "}
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-bg tracking-wider">
            Shop with ease
          </h2>
        </div>
      </div>

      <div className="banner">
        <div className="flex justify-center h-[50vh] text-center flex-col">
          {" "}
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-bg tracking-wider">
            Shop Like a King
          </h2>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
