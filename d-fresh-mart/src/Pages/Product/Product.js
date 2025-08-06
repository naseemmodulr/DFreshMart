import React from "react";
import TopHeader from "../Home/TopHeader/TopHeader";
import BottomHeader from "../Home/BottomHeader/BottomHeader";
import Logo from "../Home/Logo/Logo";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductSlide from "../Home/ProductSlide/ProductSlide";
import Footer from "../Home/Footer/Footer";
import Expenses from "./Expense/Expenses";

function Product() {
  return (
    <div className="product-detail">
      <TopHeader></TopHeader>
      <BottomHeader></BottomHeader>
      <Logo></Logo>
      <ProductDetails></ProductDetails>
      <ProductSlide></ProductSlide>
      <Expenses></Expenses>
      <Footer></Footer>

      <div className="magbify"></div>
    </div>
  );
}

export default Product;
