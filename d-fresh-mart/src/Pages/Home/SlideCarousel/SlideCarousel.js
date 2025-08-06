import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SlideCarousel.css"; // custom CSS
import image1 from "../../../images/image_1.png";
import image2 from "../../../images/image_2.png";
import image3 from "../../../images/image_3.png";
import image4 from "../../../images/image_4.png";
import image5 from "../../../images/image_5.png";
import image6 from "../../../images/image_6.png";
import image7 from "../../../images/image_7.png";
import image8 from "../../../images/image_8.png";
import image9 from "../../../images/image_9.png";
import image10 from "../../../images/image_10.png";
import image11 from "../../../images/image_11.png";
import image12 from "../../../images/image_12.png";

const SlideCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: { slidesToShow: 2 },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: { slidesToShow: 1 },
    //   },
    // ],
  };

  const slides = [
    { img: image1 },
    { img: image2 },
    { img: image3 },
    { img: image4 },
    {
      img: image5,
    },
    { img: image6 },
    { img: image7 },
    { img: image8 },
    { img: image9 },
    { img: image10 },
    { img: image11 },
    { img: image12 },
  ];

  return (
    <div className="slider-wrapper">
      <h1>Travel the world 🌎</h1>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="slider-item" key={index}>
            <figure className="bg-image">
              <img src={slide.img} alt={slide.caption} />
              <h4>Oragnic</h4>
            </figure>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideCarousel;
