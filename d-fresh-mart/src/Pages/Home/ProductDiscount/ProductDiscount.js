import React from "react";
import "./ProductDiscount.css";
import ProductDiscount1 from "../../../images/ProductDiscountimg1.jpeg";
import ProductDiscount2 from "../../../images/ProductDiscountimg2.jpeg";
import productImg1 from "../../../images/productimg1.jpeg";
import productImg2 from "../../../images/productimg2.jpeg";
import productImg3 from "../../../images/productimg3.jpeg";
import productImg4 from "../../../images/productimg4.jpeg";

function ProductDiscount() {
  return (
    <div className="productDiscount">
      <div className="main-row">
        <div className="row1">
          <div className="card-discount">
            <img src={ProductDiscount1} alt="product"></img>
            <div className="carddiscount-body">
              <h3>Alpro Organic Flavoured</h3>
              <h3>Fresh Juice</h3>
              <h6>Only</h6>
              <h2>$15.00</h2>
            </div>
          </div>

          <div className="card-discount">
            <img src={ProductDiscount2} alt="product"></img>
            <div className="carddiscount-body">
              <h3>Alpro Organic Flavoured</h3>
              <h3>Fresh Juice</h3>
              <h6>Only</h6>
              <h2>$15.00</h2>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="discounts-card">
            <div className="discount-cardleft">
              <img src={productImg1} alt="productimg"></img>
            </div>
            <div className="discount-cardright">
              <div className="discountcard-body">
                <h3>Profitable business makes your profit</h3>
                <h6>500g Pack</h6>
                <p>$29.00</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="discounts-card">
            <div className="discount-cardleft">
              <img src={productImg2} alt="productimg"></img>
            </div>

            <div className="discount-cardright">
              <div className="discountcard-body">
                <h3>Netlyfy business makes your profit</h3>
                <h6>500g Pack</h6>
                <p>$15.00</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row3">
          <div className="discounts-card">
            <div className="discount-cardleft">
              <img src={productImg3} alt="productimg"></img>
            </div>

            <div className="discount-cardright">
              <div className="discountcard-body">
                <h3>Firebase business makes your profit</h3>
                <h6>500g Pack</h6>
                <p>$19.00</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="discounts-card">
            <div className="discount-cardleft">
              <img src={productImg4} alt="productimg"></img>
            </div>

            <div className="discount-cardright">
              <div className="discountcard-body">
                <h3>Details business makes your profit</h3>
                <h6>500g Pack</h6>
                <p>$25.00</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDiscount;
