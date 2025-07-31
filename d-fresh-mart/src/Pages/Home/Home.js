import React from "react";
import TopHeader from "./TopHeader/TopHeader";
import BottomHeader from "./BottomHeader/BottomHeader";
import Logo from "./Logo/Logo";
import Slider from "./Slider/Slider";
import Navbar from "../../Navbar";
import Expense from "./Expense/Expense";
import ProductList from "./ProductList/ProductList";
function Home() {
  return (
    <div>
      <TopHeader></TopHeader>
      <BottomHeader></BottomHeader>
      <Logo></Logo>
      <Navbar />
      <Slider></Slider>
      <Expense></Expense>
      <ProductList></ProductList>
    </div>
  );
}

export default Home;
