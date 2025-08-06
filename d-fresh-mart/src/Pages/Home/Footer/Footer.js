import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="containers">
      <div className="footer">
        <div className="footer-section">
          <h3>About Company</h3>
          <ul>
            <li>
              Monday to Friday: <span>8:00am to 6:00pm</span>
            </li>
            <li>
              Saturday: <span>8:00am to 6:00pm</span>
            </li>
            <li>Sunday</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Stores</h3>
          <ul>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Support Center</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Shop Categories</h3>
          <ul>
            <li>Contact Us</li>
            <li>Information</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Nest Stories</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li>Cancellation & Returns</li>
            <li>Report Infringement</li>
            <li>Payments</li>
            <li>Shipping</li>
            <li>FQA</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
