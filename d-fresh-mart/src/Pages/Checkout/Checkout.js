import React from "react";
import TopHeader from "../Home/TopHeader/TopHeader";
import BottomHeader from "../Home/BottomHeader/BottomHeader";
import Logo from "../Home/Logo/Logo";
import Footer from "../Home/Footer/Footer";
import "./Checkout.css";
import checkoutimg1 from "../../images/productimg1.jpeg";
import checkoutimg2 from "../../images/productimg2.jpeg";

const cartItems = [
  {
    id: 1,
    name: "iPhone 15",
    price: 99999,
    qty: 1,
    img: checkoutimg1,
  },
  {
    id: 2,
    name: "AirPods Pro",
    price: 24999,
    qty: 2,
    img: checkoutimg2,
  },
];
const subtotal = cartItems.reduce(
  (acc, item) => acc + item.price * item.qty,
  0
);

function Checkout() {
  return (
    <div className="product-detail">
      <TopHeader></TopHeader>
      <BottomHeader></BottomHeader>
      <Logo></Logo>
      <div className="checkout-container">
        {/* Cart Items */}
        <div className="cart-items">
          <h2>Your Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>₹{item.price.toLocaleString()}</p>
                <p>Qty: {item.qty}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p>Subtotal: ₹{subtotal.toLocaleString()}</p>
          <p>Shipping: ₹100</p>
          <hr />
          <h3>Total: ₹{(subtotal + 100).toLocaleString()}</h3>
          <button className="checkout-btn">Proceed to Payment</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Checkout;
