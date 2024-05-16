import React from "react";
import img2 from "../../assets/images/Lastsectionsports/Pictue-224.jpg";
import amazon from "../../assets/images/Amazon-logo.png";
import goldman from "../../assets/images//goldman.png";
import nayanshi from "../../assets/images/NiyanshiAgrawal.png";
import yashashvi from "../../assets/images/YashasviBhamare.png";
import sakshi from "../../assets/images/SakshiBhate.png";
import "./AdvanceIntern.css";
function HighestIntern() {
  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide slider-container"
        data-bs-touch="false"
      >
        <div className="sub-slider-container">
          <div
            className="colab-heading"
            style={{ paddingBottom: "3%", paddingTop: "3%" }}
          >
            <span>highest internship offered</span>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card-item">
                <div className="card-img">
                  <img src={nayanshi} className="d-block w-100" alt="..." />
                </div>
                <div className="student-details">
                  <p>1,10,000/-</p>
                  <p style={{ marginTop: "-10px" }}>per month</p>
                  <p>Stipend</p>
                  <div className="offered-intern-company">
                    <img src={amazon} alt="" />
                  </div>
                </div>
                <div className="card-content">
                  <p>
                    “The opportunities for research, internships, and hands-on
                    learning experiences have been life-changing and have set me
                    up for success beyond graduation."
                  </p>

                  <div className="intern-students">
                    <p>niyanshi agrawal</p>
                    <p>Batch: B.Tech (AI )</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-item">
                <div className="card-img">
                  <img src={yashashvi} className="d-block w-100" alt="..." />
                </div>
                <div className="student-details">
                  <p>1,10,000/-</p>
                  <p style={{ marginTop: "-10px", textTransform: "none" }}>
                    per month
                  </p>
                  <p style={{ textTransform: "none" }}>Stipend</p>
                  <div className="offered-intern-company">
                    <img src={amazon} alt="" />
                  </div>
                </div>
                <div className="card-content">
                  <p>
                    "Engaging in research, internships, and hands-on learning
                    opportunities has been transformative, providing invaluable
                    experiences that have paved the way for success beyond my
                    graduation."
                  </p>

                  <div className="intern-students">
                    <p>Yashasvi Bhamare</p>
                    <p>
                      Batch: B.Tech
                      <span style={{ fontSize: "10px" }}>
                        (Cloud Technology & Information System)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="card-item">
                <div className="card-img">
                  <img src={sakshi} className="d-block w-100" alt="..." />
                </div>
                <div className="student-details">
                  <p>1,00,000/-</p>
                  <p style={{ marginTop: "-10px" }}>per month</p>
                  <p>stipend</p>
                  <div className="offered-intern-company">
                    <img src={goldman} alt="" />
                  </div>
                </div>
                <div className="card-content">
                  <p>
                    "My involvement in research, internships, and hands-on
                    learning opportunities has been life-altering, equipping me
                    with the skills and knowledge essential for success beyond
                    the confines of academia."
                  </p>

                  <div className="intern-students">
                    <p>Sakshi Bhate</p>
                    <p>Batch: B.Tech - CSE Core 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default HighestIntern;
