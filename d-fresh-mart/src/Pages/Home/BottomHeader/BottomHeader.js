import React from "react";
import "./BottomHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function BottomHeader() {
  return (
    <nav className="bottom-header">
      <ul className="nav-left">
        <li className="nav-btn">
          <a href="#">About Us</a>
        </li>
        <li className="nav-btn">
          <a href="#">My Account</a>
        </li>
        <li className="nav-btn">
          <a href="#">Wishlist</a>
        </li>
      </ul>

      <div className="delivery-time">
        We deliver to you everyday from <strong>7:00</strong> to{" "}
        <strong>22:00</strong>
      </div>

      <div className="nav-right">
        <ul className="dropdown">
          <li className="nav-btn">
            <a href="#">
              English
              <FontAwesomeIcon icon={faArrowDown} />
            </a>

            <ul className="dropdown-content">
              <li>
                <a href="#">Tamil</a>
              </li>
              <li>
                <a href="#">Hindi</a>
              </li>
              <li>
                <a href="#">French</a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="dropdown">
          <li className="nav-btn">
            <a href="#">
              USD
              <FontAwesomeIcon icon={faArrowDown} />
            </a>

            <ul className="dropdown-content">
              <li>
                <a href="#">INR</a>
              </li>
              <li>
                <a href="#">EUR</a>
              </li>
              <li>
                <a href="#">GBP</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="dropdown">
          <li className="nav-btn">
            <a href="#">Track Order</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default BottomHeader;
