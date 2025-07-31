import React from "react";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./Expense.css";

function Expense() {
  return (
    <div className="expense">
      <div className="expense-card">
        <div className="expense-left">
          <FontAwesomeIcon className="icon" icon={faDollarSign} />
        </div>
        <div className="expense-right">
          <h5>Wide Assortment</h5>
          <h6>Orders $50 or more</h6>
        </div>
      </div>
      <div className="expense-card">
        <div className="expense-left">
          <FontAwesomeIcon className="icon" icon={faPercent} />
        </div>
        <div className="expense-right">
          <h5>Wide Assortment</h5>
          <h6>Orders $50 or more</h6>
        </div>
      </div>
      <div className="expense-card">
        <div className="expense-left">
          <FontAwesomeIcon className="icon" icon={faTag} />
        </div>
        <div className="expense-right">
          <h5>Wide Assortment</h5>
          <h6>Orders $50 or more</h6>
        </div>
      </div>
      <div className="expense-card">
        <div className="expense-left">
          <FontAwesomeIcon className="icon" icon={faDollarSign} />
        </div>
        <div className="expense-right">
          <h5>Wide Assortment</h5>
          <h6>Orders $50 or more</h6>
        </div>
      </div>
      <div className="expense-card">
        <div className="expense-left">
          <FontAwesomeIcon className="icon" icon={faClock} />
        </div>
        <div className="expense-right">
          <h5>Wide Assortment</h5>
          <h6>Orders $50 or more</h6>
        </div>
      </div>
    </div>
  );
}

export default Expense;
