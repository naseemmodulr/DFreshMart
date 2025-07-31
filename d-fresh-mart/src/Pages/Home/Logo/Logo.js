import React from "react";
import "./Logo.css";
import logo from "../../../images/logo-01.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function Logo() {
  return (
    <nav className="Logo-Nav">
      <div className="Logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="Categories">
        <button>
          <FontAwesomeIcon icon={faBarsStaggered} />
          Categories
        </button>
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="Search for product, categories" />
        <button type="button">Search</button>
      </div>
      <div className="button-list">
        <ul>
          <li>
            <a href="#">
              <button>Account</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button>refresh</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button>Wishlist</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button>Cart</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Logo;
