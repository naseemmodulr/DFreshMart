import React from "react";
import TopHeader from "./TopHeader/TopHeader";
import BottomHeader from "./BottomHeader/BottomHeader";
import Logo from "./Logo/Logo";
import Slider from "./Slider/Slider";
// import Navbar from "../../Navbar";
import Expense from "./Expense/Expense";
import ProductList from "./ProductList/ProductList";
import SlideCarousel from "./SlideCarousel/SlideCarousel";
import ProductSlide from "./ProductSlide/ProductSlide";
import Discount from "./Discount/Discount";
import BlogPost from "./BlogPost/BlogPost";
import ProductDiscount from "./ProductDiscount/ProductDiscount";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div>
      <TopHeader></TopHeader>
      <BottomHeader></BottomHeader>
      <Logo></Logo>
      {/* <Navbar /> */}
      <Slider></Slider>
      <SlideCarousel></SlideCarousel>
      <ProductList></ProductList>
      <Expense></Expense>
      <ProductSlide></ProductSlide>
      <ProductDiscount></ProductDiscount>
      <Discount></Discount>
      <BlogPost></BlogPost>
      <Footer></Footer>
    </div>
  );
}

export default Home;
