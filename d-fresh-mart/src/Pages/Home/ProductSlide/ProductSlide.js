import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlide.css";

import productImg1 from "../../../images/productimg1.jpeg";
import productImg2 from "../../../images/productimg2.jpeg";
import productImg3 from "../../../images/productimg3.jpeg";
import productImg4 from "../../../images/productimg4.jpeg";
import productImg5 from "../../../images/productimg5.jpeg";
import productImg6 from "../../../images/productimg6.jpeg";
import productImg7 from "../../../images/productimg7.jpeg";
import productImg8 from "../../../images/productimg8.jpeg";
import productImg9 from "../../../images/productimg9.jpeg";
import productImg10 from "../../../images/productimg10.jpeg";
import productImg11 from "../../../images/productimg11.jpeg";
import productImg12 from "../../../images/productimg12.jpeg";

const productItems = [
  {
    id: 1,
    name: "Details Profitable business makes your profit",
    price: 29,
    image: productImg1,
  },
  {
    id: 2,
    name: "Firebase business makes your profit",
    price: 50,
    image: productImg2,
  },
  {
    id: 3,
    name: "Netlyfy business makes your profit",
    price: 20,
    image: productImg3,
  },
  {
    id: 4,
    name: "Profitable business makes your profit",
    price: 90,
    image: productImg4,
  },
  {
    id: 5,
    name: "Details business makes your profit",
    price: 30,
    image: productImg5,
  },
  {
    id: 6,
    name: "Valuable business makes your profit",
    price: 16,
    image: productImg6,
  },
  {
    id: 7,
    name: "System business makes your profit",
    price: 15,
    image: productImg7,
  },
  {
    id: 8,
    name: "Cooler business makes your profit",
    price: 13,
    image: productImg8,
  },
  {
    id: 9,
    name: "Profitable business makes your profit",
    price: 59,
    image: productImg9,
  },
  {
    id: 10,
    name: "Content business makes your profit",
    price: 70,
    image: productImg10,
  },
  {
    id: 11,
    name: "Staning business makes your profit",
    price: 85,
    image: productImg11,
  },
  {
    id: 12,
    name: "Profitable business makes your profit",
    price: 25,
    image: productImg12,
  },
];

function ProductSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="product-list-carousel">
      <h2>Our Products</h2>
      <Slider {...settings}>
        {productItems.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h6>500g Pack</h6>
            <p>${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlide;
