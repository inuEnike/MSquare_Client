import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  let settings = {
    arrows: false,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    fade: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="bg">
          <div className="h-[60vh] md:h-[80vh] flex items-center justify-center text-center flex-col text-white">
            <h1 className="text-6xl uppercase font-bold text-center text-pretty ">
              A Place For Clothing
            </h1>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ullam sint debitis.
            </p>
            <button className="bg-banner text-black px-5 py-3 rounded-sm">
              Shop Now
            </button>
          </div>
        </div>

        <div className="bg2">
          <div className="h-[60vh] md:h-[80vh] flex items-center justify-center text-center flex-col text-white">
            <h1 className="text-6xl uppercase font-bold text-center text-pretty ">
              A Place For Royals
            </h1>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ullam sint debitis.
            </p>
            <button className="bg-banner text-black px-5 py-3 rounded-sm">
              Learn More
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
