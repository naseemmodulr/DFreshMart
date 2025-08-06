import React from "react";
import "./BlogPost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import BlogImg1 from "../../../images/blogimg1.jpeg";
import BlogImg2 from "../../../images/blogimg2.jpeg";
import BlogImg3 from "../../../images/blogimg3.jpeg";
import BlogImg4 from "../../../images/blogimg4.jpeg";
function BlogPost() {
  return (
    <div className="containers">
      <h1>Latest Blog Post Insights</h1>

      <div className="main">
        <div className="blog-main">
          <div className="card">
            <div className="card-image">
              <img src={BlogImg1} alt="BlogImg"></img>
            </div>
            <div className="card-body">
              <div className="meta-info">
                <div className="time">
                  <FontAwesomeIcon icon={faClock} aria-hidden="true" />
                  <time>15 Aug, 2025</time>
                </div>
                <div className="folder">
                  <FontAwesomeIcon icon={faFolder} aria-hidden="true" />
                  <span>Modern Fashion</span>
                </div>

                <h5>
                  Shion Fixation: Fueling Your Passion for All Things Stylish
                </h5>
                <div className="plus">
                  <FontAwesomeIcon
                    className="plus-icon"
                    icon={faPlus}
                    aria-hidden="true"
                  />
                  <span className="read">Read More</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-main">
          <div className="card">
            <div className="card-image">
              <img src={BlogImg2} alt="BlogImg"></img>
            </div>
            <div className="card-body">
              <div className="meta-info">
                <div className="time">
                  <FontAwesomeIcon icon={faClock} aria-hidden="true" />
                  <time>15 Aug, 2025</time>
                </div>
                <div className="folder">
                  <FontAwesomeIcon icon={faFolder} aria-hidden="true" />
                  <span>Modern Fashion</span>
                </div>

                <h5>
                  Ashion Fixation: Fueling Your Passion for All Things Stylish
                </h5>
                <div className="plus">
                  <FontAwesomeIcon
                    className="plus-icon"
                    icon={faPlus}
                    aria-hidden="true"
                  />
                  <span className="read">Read More</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-main">
          <div className="card">
            <div className="card-image">
              <img src={BlogImg3} alt="BlogImg"></img>
            </div>
            <div className="card-body">
              <div className="meta-info">
                <div className="time">
                  <FontAwesomeIcon icon={faClock} aria-hidden="true" />
                  <time>15 Aug, 2025</time>
                </div>
                <div className="folder">
                  <FontAwesomeIcon icon={faFolder} aria-hidden="true" />
                  <span>Modern Fashion</span>
                </div>

                <h5>Fixation: Fueling Your Passion for All Things Stylish</h5>
                <div className="plus">
                  <FontAwesomeIcon
                    className="plus-icon"
                    icon={faPlus}
                    aria-hidden="true"
                  />
                  <span className="read">Read More</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-main">
          <div className="card">
            <div className="card-image">
              <img src={BlogImg4} alt="BlogImg"></img>
            </div>
            <div className="card-body">
              <div className="meta-info">
                <div className="time">
                  <FontAwesomeIcon icon={faClock} aria-hidden="true" />
                  <time>15 Aug, 2025</time>
                </div>
                <div className="folder">
                  <FontAwesomeIcon icon={faFolder} aria-hidden="true" />
                  <span>Modern Fashion</span>
                </div>

                <h5>
                  Fashion Fixation: Fueling Your Passion for All Things Stylish
                </h5>
                <div className="plus">
                  <FontAwesomeIcon
                    className="plus-icon"
                    icon={faPlus}
                    aria-hidden="true"
                  />
                  <span className="read">Read More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
