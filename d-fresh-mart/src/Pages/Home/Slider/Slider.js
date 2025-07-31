import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import carouselOne from "../../../images/carousel-img01.webp";
import carouselTwo from "../../../images/carousel-img02.webp";
import "./Slider.css";
function Slider() {
  return (
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img className="d-block w-100" src={carouselOne} alt="First slide" />
        <Carousel.Caption className="carousel-content">
          <p>Get 30% off on your first $100 purchase</p>
          <h1>Do not miss our amazing grocery deals</h1>
          <button>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselTwo} alt="Second slide" />
        <Carousel.Caption className="carousel-content">
          <p>Get 30% off on your first $100 purchase</p>
          <h1>Do not miss our amazing grocery deals</h1>
          <button>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
