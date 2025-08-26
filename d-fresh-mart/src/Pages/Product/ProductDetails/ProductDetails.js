import React from "react";
import "./ProductDetails.css";
import productimg1 from "../../../images/productimg1.jpeg";
import proimg1 from "../../../images/proimg1.svg";
import proimg2 from "../../../images/proimg2.svg";
import proimg3 from "../../../images/proimg3.svg";

function ProductDetails() {
  return (
    <div className="containers">
      <div className="ProductDetails">
        <div className="left-side">
          <img src={productimg1} alt="productimg"></img>
        </div>

        <div className="right-side">
          <h2>Details Profitable business makes your profit</h2>
          <p>
            Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23...
          </p>
          <h4>$29.00</h4>
          <button>Add to Cart</button>
        </div>
        <div className="right-end">
          <h3>Avaliable Offer</h3>

          <div className="avaliable-offer">
            <div className="checkout">
              <img src={proimg1} alt="proimg1"></img>
            </div>
            <div className="content">
              <p>
                Get 5% instant discount for the 1st Flipkart Order using Ekomart
                UPI
              </p>
            </div>
          </div>
          <div className="avaliable-offer">
            <div className="checkout">
              <img src={proimg2} alt="proimg2"></img>
            </div>
            <div className="content">
              <p>Flat $250 off on Citi Credit Card EMI Transactions over $30</p>
            </div>
          </div>
          <div className="avaliable-offer">
            <div className="checkout">
              <img src={proimg3} alt="proimg3"></img>
            </div>
            <div className="content">
              <p>Free Worldwide Shipping on all orders over $100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
