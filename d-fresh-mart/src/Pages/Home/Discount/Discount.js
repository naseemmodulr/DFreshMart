import React from "react";
import "./Discount.css";
import DiscountImg1 from "../../../images/discountimg1.jpeg";
import DiscountImg2 from "../../../images/discountimg2.jpeg";
import DiscountImg3 from "../../../images/discountimg3.jpeg";
import DiscountImg4 from "../../../images/discountimg4.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Discount() {
  return (
    <div className="containers">
      <div className="discount">
        <div className="discount-card">
          <img src={DiscountImg1} alt="discountimg1"></img>
          <button>weekend discount</button>
          <h2>Drink Fresh Corn Juice</h2>
          <h4>Good Taste</h4>
          <FontAwesomeIcon className="icon" icon={faPlus}></FontAwesomeIcon>
          <span className="shop">Shop Now</span>
        </div>
        <div className="discount-card">
          <img src={DiscountImg2} alt="discountimg2"></img>
          <button>weekend discount</button>
          <h2>Drink Fresh Corn Juice</h2>
          <h4>Good Taste</h4>
          <FontAwesomeIcon className="icon" icon={faPlus}></FontAwesomeIcon>
          <span className="shop">Shop Now</span>
        </div>
        <div className="discount-card">
          <img src={DiscountImg3} alt="discountimg3"></img>
          <button>weekend discount</button>
          <h2>Drink Fresh Corn Juice</h2>
          <h4>Good Taste</h4>
          <FontAwesomeIcon className="icon" icon={faPlus}></FontAwesomeIcon>
          <span className="shop">Shop Now</span>
        </div>
        <div className="discount-card">
          <img src={DiscountImg4} alt="discountimg4"></img>
          <button>weekend discount</button>
          <h2>Drink Fresh Corn Juice</h2>
          <h4>Good Taste</h4>
          <FontAwesomeIcon className="icon" icon={faPlus}></FontAwesomeIcon>
          <span className="shop">Shop Now</span>
        </div>
      </div>
    </div>
  );
}

export default Discount;
