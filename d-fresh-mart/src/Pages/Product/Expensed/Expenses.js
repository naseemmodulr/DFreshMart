import React from "react";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./Expenses.css";

function Expense() {
  return (
    <div className="expenses">
      <div className="expense-card">
        <div className="expense-left">
          <FontAwesomeIcon className="icons" icon={faDollarSign} />
        </div>
        <div className="expense-right">
          <h5>Best Prices & Offers</h5>
          <h6>We prepared special discounts you on grocery products.</h6>
        </div>
      </div>
      <div className="expense-card">
        <div className="expense-left">
          <FontAwesomeIcon className="icons" icon={faPercent} />
        </div>
        <div className="expense-right">
          <h5>100% Return Policy</h5>
          <h6>We prepared special discounts you on grocery products.</h6>
        </div>
      </div>
      <div className="expense-card">
        <div className="expense-left">
          <FontAwesomeIcon className="icons" icon={faTag} />
        </div>
        <div className="expense-right">
          <h5>Support 24/7</h5>
          <h6>We prepared special discounts you on grocery products.</h6>
        </div>
      </div>

      <div className="expense-card">
        <div className="expense-left">
          <FontAwesomeIcon className="icons" icon={faClock} />
        </div>
        <div className="expense-right">
          <h5>Great Offer Daily Deal</h5>
          <h6>We prepared special discounts you on grocery products.</h6>
        </div>
      </div>
    </div>
  );
}

export default Expense;
