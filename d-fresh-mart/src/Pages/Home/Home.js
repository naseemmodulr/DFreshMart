import React from "react";
import TopHeader from "./TopHeader/TopHeader";
import BottomHeader from "./BottomHeader/BottomHeader";
import Logo from "./Logo/Logo";
import Slider from "./Slider/Slider";
import Navbar from "../../Navbar";
import Expense from "./Expense/Expense";
import ProductList from "./ProductList/ProductList";
import SlideCarousel from "./SlideCarousel/SlideCarousel";
import ProductSlide from "./ProductSlide/ProductSlide";
import Discount from "./Discount/Discount";
import BlogPost from "./BlogPost/BlogPost";
import ProductDiscount from "./ProductDiscount/ProductDiscount";
function Home() {
  return (
    <div>
      <TopHeader></TopHeader>
      <BottomHeader></BottomHeader>
      <Logo></Logo>
      <Navbar />
      <Slider></Slider>
      <SlideCarousel></SlideCarousel>
      <Expense></Expense>

      <ProductList></ProductList>
      <ProductSlide></ProductSlide>
      <Discount></Discount>
      <BlogPost></BlogPost>
      <ProductDiscount></ProductDiscount>
    </div>
  );
}

export default Home;
